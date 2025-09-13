import { Controller } from '@nestjs/common';
import { Payload, MessagePattern } from '@nestjs/microservices';
import { UserInputService } from './user-input.service';
import { UserInputType } from './user-input.entity';

@Controller()
export class UserInputController {
  constructor(private readonly userInputService: UserInputService) {}

  @MessagePattern()
  async handleMessageSent(
    @Payload()
    data: {
      id: number;
      firstName: string;
      text: string;
      timestamp: Date;
    },
  ) {
    // data will be the parsed JSON from your publisher
    console.log('Received message_sent event:', data);

    // If data is a JSON string, parse it first
    let parsedData: {
      id: number;
      firstName: string;
      text: string;
      timestamp: Date;
    };
    if (typeof data === 'string') {
      parsedData = JSON.parse(data) as {
        id: number;
        firstName: string;
        text: string;
        timestamp: Date;
      };
      // Convert timestamp string to Date object
      parsedData.timestamp = new Date(parsedData.timestamp);
    } else {
      parsedData = data;
    }

    await this.userInputService.createOne({
      author: parsedData.id,
      subject: 15,
      type: UserInputType.ANSWER,
      content: parsedData.text,
      sentAt: parsedData.timestamp,
    });

    // No manual acknowledgment needed; NestJS RMQ transport handles it automatically.
  }
}
