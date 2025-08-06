-- CreateEnum
CREATE TYPE "UserInputType" AS ENUM ('QUESTION', 'ANSWER', 'COMMENT', 'FEEDBACK', 'STATEMENT', 'SUGGESTION', 'IDEA');

-- CreateTable
CREATE TABLE "UserInput" (
    "id" SERIAL NOT NULL,
    "type" "UserInputType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "content" VARCHAR(500) NOT NULL,

    CONSTRAINT "UserInput_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserInput" ADD CONSTRAINT "UserInput_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInput" ADD CONSTRAINT "UserInput_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
