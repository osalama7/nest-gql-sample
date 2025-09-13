/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Author
 *
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>;
/**
 * Model Subject
 *
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>;
/**
 * Model UserInput
 *
 */
export type UserInput = $Result.DefaultSelection<Prisma.$UserInputPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const UserInputType: {
    QUESTION: 'QUESTION';
    ANSWER: 'ANSWER';
    COMMENT: 'COMMENT';
    FEEDBACK: 'FEEDBACK';
    STATEMENT: 'STATEMENT';
    SUGGESTION: 'SUGGESTION';
    IDEA: 'IDEA';
  };

  export type UserInputType =
    (typeof UserInputType)[keyof typeof UserInputType];
}

export type UserInputType = $Enums.UserInputType;

export const UserInputType: typeof $Enums.UserInputType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.author.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subjects
   * const subjects = await prisma.subject.findMany()
   * ```
   */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userInput`: Exposes CRUD operations for the **UserInput** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserInputs
   * const userInputs = await prisma.userInput.findMany()
   * ```
   */
  get userInput(): Prisma.UserInputDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Author: 'Author';
    Subject: 'Subject';
    UserInput: 'UserInput';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'author' | 'subject' | 'userInput';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>;
        fields: Prisma.AuthorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[];
          };
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[];
          };
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[];
          };
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAuthor>;
          };
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuthorGroupByOutputType>[];
          };
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>;
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number;
          };
        };
      };
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>;
        fields: Prisma.SubjectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[];
          };
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[];
          };
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[];
          };
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubject>;
          };
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>;
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number;
          };
        };
      };
      UserInput: {
        payload: Prisma.$UserInputPayload<ExtArgs>;
        fields: Prisma.UserInputFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserInputFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserInputFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>;
          };
          findFirst: {
            args: Prisma.UserInputFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserInputFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>;
          };
          findMany: {
            args: Prisma.UserInputFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>[];
          };
          create: {
            args: Prisma.UserInputCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>;
          };
          createMany: {
            args: Prisma.UserInputCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserInputCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>[];
          };
          delete: {
            args: Prisma.UserInputDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>;
          };
          update: {
            args: Prisma.UserInputUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>;
          };
          deleteMany: {
            args: Prisma.UserInputDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserInputUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserInputUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>[];
          };
          upsert: {
            args: Prisma.UserInputUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserInputPayload>;
          };
          aggregate: {
            args: Prisma.UserInputAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserInput>;
          };
          groupBy: {
            args: Prisma.UserInputGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserInputGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserInputCountArgs<ExtArgs>;
            result: $Utils.Optional<UserInputCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    author?: AuthorOmit;
    subject?: SubjectOmit;
    userInput?: UserInputOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    UserInput: number;
  };

  export type AuthorCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    UserInput?: boolean | AuthorCountOutputTypeCountUserInputArgs;
  };

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountUserInputArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserInputWhereInput;
  };

  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    UserInput: number;
  };

  export type SubjectCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    UserInput?: boolean | SubjectCountOutputTypeCountUserInputArgs;
  };

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountUserInputArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserInputWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null;
    _avg: AuthorAvgAggregateOutputType | null;
    _sum: AuthorSumAggregateOutputType | null;
    _min: AuthorMinAggregateOutputType | null;
    _max: AuthorMaxAggregateOutputType | null;
  };

  export type AuthorAvgAggregateOutputType = {
    id: number | null;
  };

  export type AuthorSumAggregateOutputType = {
    id: number | null;
  };

  export type AuthorMinAggregateOutputType = {
    id: number | null;
    firstName: string | null;
    lastName: string | null;
  };

  export type AuthorMaxAggregateOutputType = {
    id: number | null;
    firstName: string | null;
    lastName: string | null;
  };

  export type AuthorCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    _all: number;
  };

  export type AuthorAvgAggregateInputType = {
    id?: true;
  };

  export type AuthorSumAggregateInputType = {
    id?: true;
  };

  export type AuthorMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
  };

  export type AuthorMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
  };

  export type AuthorCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    _all?: true;
  };

  export type AuthorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Authors
     **/
    _count?: true | AuthorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AuthorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AuthorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuthorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuthorMaxAggregateInputType;
  };

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
    [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>;
  };

  export type AuthorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuthorWhereInput;
    orderBy?:
      | AuthorOrderByWithAggregationInput
      | AuthorOrderByWithAggregationInput[];
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum;
    having?: AuthorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthorCountAggregateInputType | true;
    _avg?: AuthorAvgAggregateInputType;
    _sum?: AuthorSumAggregateInputType;
    _min?: AuthorMinAggregateInputType;
    _max?: AuthorMaxAggregateInputType;
  };

  export type AuthorGroupByOutputType = {
    id: number;
    firstName: string | null;
    lastName: string | null;
    _count: AuthorCountAggregateOutputType | null;
    _avg: AuthorAvgAggregateOutputType | null;
    _sum: AuthorSumAggregateOutputType | null;
    _min: AuthorMinAggregateOutputType | null;
    _max: AuthorMaxAggregateOutputType | null;
  };

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AuthorGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AuthorGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>;
        }
      >
    >;

  export type AuthorSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      UserInput?: boolean | Author$UserInputArgs<ExtArgs>;
      _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['author']
  >;

  export type AuthorSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
    },
    ExtArgs['result']['author']
  >;

  export type AuthorSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
    },
    ExtArgs['result']['author']
  >;

  export type AuthorSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
  };

  export type AuthorOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'firstName' | 'lastName',
    ExtArgs['result']['author']
  >;
  export type AuthorInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    UserInput?: boolean | Author$UserInputArgs<ExtArgs>;
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AuthorIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type AuthorIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $AuthorPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Author';
    objects: {
      UserInput: Prisma.$UserInputPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        firstName: string | null;
        lastName: string | null;
      },
      ExtArgs['result']['author']
    >;
    composites: {};
  };

  type AuthorGetPayload<
    S extends boolean | null | undefined | AuthorDefaultArgs,
  > = $Result.GetResult<Prisma.$AuthorPayload, S>;

  type AuthorCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuthorCountAggregateInputType | true;
  };

  export interface AuthorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Author'];
      meta: { name: 'Author' };
    };
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(
      args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(
      args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     *
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuthorFindManyArgs>(
      args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     *
     */
    create<T extends AuthorCreateArgs>(
      args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuthorCreateManyArgs>(
      args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     *
     */
    delete<T extends AuthorDeleteArgs>(
      args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuthorUpdateArgs>(
      args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuthorDeleteManyArgs>(
      args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuthorUpdateManyArgs>(
      args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(
      args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
     **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AuthorAggregateArgs>(
      args: Subset<T, AuthorAggregateArgs>,
    ): Prisma.PrismaPromise<GetAuthorAggregateType<T>>;

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAuthorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Author model
     */
    readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    UserInput<T extends Author$UserInputArgs<ExtArgs> = {}>(
      args?: Subset<T, Author$UserInputArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserInputPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<'Author', 'Int'>;
    readonly firstName: FieldRef<'Author', 'String'>;
    readonly lastName: FieldRef<'Author', 'String'>;
  }

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[];
  };

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[];
  };

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[];
  };

  /**
   * Author create
   */
  export type AuthorCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Author.
     */
    data?: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>;
  };

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Author update
   */
  export type AuthorUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>;
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>;
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput;
    /**
     * Limit how many Authors to update.
     */
    limit?: number;
  };

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>;
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput;
    /**
     * Limit how many Authors to update.
     */
    limit?: number;
  };

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput;
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>;
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>;
  };

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput;
    /**
     * Limit how many Authors to delete.
     */
    limit?: number;
  };

  /**
   * Author.UserInput
   */
  export type Author$UserInputArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    where?: UserInputWhereInput;
    orderBy?:
      | UserInputOrderByWithRelationInput
      | UserInputOrderByWithRelationInput[];
    cursor?: UserInputWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserInputScalarFieldEnum | UserInputScalarFieldEnum[];
  };

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
  };

  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null;
    _avg: SubjectAvgAggregateOutputType | null;
    _sum: SubjectSumAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
  };

  export type SubjectAvgAggregateOutputType = {
    id: number | null;
  };

  export type SubjectSumAggregateOutputType = {
    id: number | null;
  };

  export type SubjectMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
  };

  export type SubjectMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
  };

  export type SubjectCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    _all: number;
  };

  export type SubjectAvgAggregateInputType = {
    id?: true;
  };

  export type SubjectSumAggregateInputType = {
    id?: true;
  };

  export type SubjectMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
  };

  export type SubjectMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
  };

  export type SubjectCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    _all?: true;
  };

  export type SubjectAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?:
      | SubjectOrderByWithRelationInput
      | SubjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subjects
     **/
    _count?: true | SubjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubjectAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubjectSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubjectMaxAggregateInputType;
  };

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
    [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>;
  };

  export type SubjectGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubjectWhereInput;
    orderBy?:
      | SubjectOrderByWithAggregationInput
      | SubjectOrderByWithAggregationInput[];
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum;
    having?: SubjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectCountAggregateInputType | true;
    _avg?: SubjectAvgAggregateInputType;
    _sum?: SubjectSumAggregateInputType;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
  };

  export type SubjectGroupByOutputType = {
    id: number;
    title: string | null;
    content: string | null;
    _count: SubjectCountAggregateOutputType | null;
    _avg: SubjectAvgAggregateOutputType | null;
    _sum: SubjectSumAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
  };

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubjectGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SubjectGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>;
        }
      >
    >;

  export type SubjectSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      UserInput?: boolean | Subject$UserInputArgs<ExtArgs>;
      _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subject']
  >;

  export type SubjectSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
    },
    ExtArgs['result']['subject']
  >;

  export type SubjectSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
    },
    ExtArgs['result']['subject']
  >;

  export type SubjectSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
  };

  export type SubjectOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'title' | 'content',
    ExtArgs['result']['subject']
  >;
  export type SubjectInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    UserInput?: boolean | Subject$UserInputArgs<ExtArgs>;
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type SubjectIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type SubjectIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $SubjectPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Subject';
    objects: {
      UserInput: Prisma.$UserInputPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string | null;
        content: string | null;
      },
      ExtArgs['result']['subject']
    >;
    composites: {};
  };

  type SubjectGetPayload<
    S extends boolean | null | undefined | SubjectDefaultArgs,
  > = $Result.GetResult<Prisma.$SubjectPayload, S>;

  type SubjectCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubjectCountAggregateInputType | true;
  };

  export interface SubjectDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Subject'];
      meta: { name: 'Subject' };
    };
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(
      args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>,
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(
      args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>,
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     *
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubjectFindManyArgs>(
      args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     *
     */
    create<T extends SubjectCreateArgs>(
      args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>,
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubjectCreateManyArgs>(
      args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     *
     */
    delete<T extends SubjectDeleteArgs>(
      args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>,
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubjectUpdateArgs>(
      args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>,
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubjectDeleteManyArgs>(
      args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubjectUpdateManyArgs>(
      args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(
      args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>,
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
     **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubjectAggregateArgs>(
      args: Subset<T, SubjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubjectAggregateType<T>>;

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSubjectGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Subject model
     */
    readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    UserInput<T extends Subject$UserInputArgs<ExtArgs> = {}>(
      args?: Subset<T, Subject$UserInputArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserInputPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<'Subject', 'Int'>;
    readonly title: FieldRef<'Subject', 'String'>;
    readonly content: FieldRef<'Subject', 'String'>;
  }

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput;
  };

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput;
  };

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?:
      | SubjectOrderByWithRelationInput
      | SubjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?:
      | SubjectOrderByWithRelationInput
      | SubjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?:
      | SubjectOrderByWithRelationInput
      | SubjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * Subject create
   */
  export type SubjectCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * The data needed to create a Subject.
     */
    data?: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>;
  };

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>;
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput;
  };

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>;
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput;
    /**
     * Limit how many Subjects to update.
     */
    limit?: number;
  };

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>;
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput;
    /**
     * Limit how many Subjects to update.
     */
    limit?: number;
  };

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput;
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>;
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>;
  };

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput;
  };

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput;
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number;
  };

  /**
   * Subject.UserInput
   */
  export type Subject$UserInputArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    where?: UserInputWhereInput;
    orderBy?:
      | UserInputOrderByWithRelationInput
      | UserInputOrderByWithRelationInput[];
    cursor?: UserInputWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserInputScalarFieldEnum | UserInputScalarFieldEnum[];
  };

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
  };

  /**
   * Model UserInput
   */

  export type AggregateUserInput = {
    _count: UserInputCountAggregateOutputType | null;
    _avg: UserInputAvgAggregateOutputType | null;
    _sum: UserInputSumAggregateOutputType | null;
    _min: UserInputMinAggregateOutputType | null;
    _max: UserInputMaxAggregateOutputType | null;
  };

  export type UserInputAvgAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    subjectId: number | null;
  };

  export type UserInputSumAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    subjectId: number | null;
  };

  export type UserInputMinAggregateOutputType = {
    id: number | null;
    type: $Enums.UserInputType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    subjectId: number | null;
    content: string | null;
  };

  export type UserInputMaxAggregateOutputType = {
    id: number | null;
    type: $Enums.UserInputType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: number | null;
    subjectId: number | null;
    content: string | null;
  };

  export type UserInputCountAggregateOutputType = {
    id: number;
    type: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    subjectId: number;
    content: number;
    _all: number;
  };

  export type UserInputAvgAggregateInputType = {
    id?: true;
    authorId?: true;
    subjectId?: true;
  };

  export type UserInputSumAggregateInputType = {
    id?: true;
    authorId?: true;
    subjectId?: true;
  };

  export type UserInputMinAggregateInputType = {
    id?: true;
    type?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    subjectId?: true;
    content?: true;
  };

  export type UserInputMaxAggregateInputType = {
    id?: true;
    type?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    subjectId?: true;
    content?: true;
  };

  export type UserInputCountAggregateInputType = {
    id?: true;
    type?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    subjectId?: true;
    content?: true;
    _all?: true;
  };

  export type UserInputAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserInput to aggregate.
     */
    where?: UserInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserInputs to fetch.
     */
    orderBy?:
      | UserInputOrderByWithRelationInput
      | UserInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserInputs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserInputs
     **/
    _count?: true | UserInputCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserInputAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserInputSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserInputMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserInputMaxAggregateInputType;
  };

  export type GetUserInputAggregateType<T extends UserInputAggregateArgs> = {
    [P in keyof T & keyof AggregateUserInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInput[P]>
      : GetScalarType<T[P], AggregateUserInput[P]>;
  };

  export type UserInputGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserInputWhereInput;
    orderBy?:
      | UserInputOrderByWithAggregationInput
      | UserInputOrderByWithAggregationInput[];
    by: UserInputScalarFieldEnum[] | UserInputScalarFieldEnum;
    having?: UserInputScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserInputCountAggregateInputType | true;
    _avg?: UserInputAvgAggregateInputType;
    _sum?: UserInputSumAggregateInputType;
    _min?: UserInputMinAggregateInputType;
    _max?: UserInputMaxAggregateInputType;
  };

  export type UserInputGroupByOutputType = {
    id: number;
    type: $Enums.UserInputType;
    createdAt: Date;
    updatedAt: Date;
    authorId: number;
    subjectId: number;
    content: string;
    _count: UserInputCountAggregateOutputType | null;
    _avg: UserInputAvgAggregateOutputType | null;
    _sum: UserInputSumAggregateOutputType | null;
    _min: UserInputMinAggregateOutputType | null;
    _max: UserInputMaxAggregateOutputType | null;
  };

  type GetUserInputGroupByPayload<T extends UserInputGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserInputGroupByOutputType, T['by']> & {
          [P in keyof T & keyof UserInputGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInputGroupByOutputType[P]>
            : GetScalarType<T[P], UserInputGroupByOutputType[P]>;
        }
      >
    >;

  export type UserInputSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      subjectId?: boolean;
      content?: boolean;
      author?: boolean | AuthorDefaultArgs<ExtArgs>;
      subject?: boolean | SubjectDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userInput']
  >;

  export type UserInputSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      subjectId?: boolean;
      content?: boolean;
      author?: boolean | AuthorDefaultArgs<ExtArgs>;
      subject?: boolean | SubjectDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userInput']
  >;

  export type UserInputSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      type?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      authorId?: boolean;
      subjectId?: boolean;
      content?: boolean;
      author?: boolean | AuthorDefaultArgs<ExtArgs>;
      subject?: boolean | SubjectDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['userInput']
  >;

  export type UserInputSelectScalar = {
    id?: boolean;
    type?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    subjectId?: boolean;
    content?: boolean;
  };

  export type UserInputOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'type'
    | 'createdAt'
    | 'updatedAt'
    | 'authorId'
    | 'subjectId'
    | 'content',
    ExtArgs['result']['userInput']
  >;
  export type UserInputInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>;
    subject?: boolean | SubjectDefaultArgs<ExtArgs>;
  };
  export type UserInputIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>;
    subject?: boolean | SubjectDefaultArgs<ExtArgs>;
  };
  export type UserInputIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>;
    subject?: boolean | SubjectDefaultArgs<ExtArgs>;
  };

  export type $UserInputPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'UserInput';
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>;
      subject: Prisma.$SubjectPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        type: $Enums.UserInputType;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
        subjectId: number;
        content: string;
      },
      ExtArgs['result']['userInput']
    >;
    composites: {};
  };

  type UserInputGetPayload<
    S extends boolean | null | undefined | UserInputDefaultArgs,
  > = $Result.GetResult<Prisma.$UserInputPayload, S>;

  type UserInputCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserInputFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserInputCountAggregateInputType | true;
  };

  export interface UserInputDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['UserInput'];
      meta: { name: 'UserInput' };
    };
    /**
     * Find zero or one UserInput that matches the filter.
     * @param {UserInputFindUniqueArgs} args - Arguments to find a UserInput
     * @example
     * // Get one UserInput
     * const userInput = await prisma.userInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInputFindUniqueArgs>(
      args: SelectSubset<T, UserInputFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserInputClient<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInputFindUniqueOrThrowArgs} args - Arguments to find a UserInput
     * @example
     * // Get one UserInput
     * const userInput = await prisma.userInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInputFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserInputFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserInputClient<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputFindFirstArgs} args - Arguments to find a UserInput
     * @example
     * // Get one UserInput
     * const userInput = await prisma.userInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInputFindFirstArgs>(
      args?: SelectSubset<T, UserInputFindFirstArgs<ExtArgs>>,
    ): Prisma__UserInputClient<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputFindFirstOrThrowArgs} args - Arguments to find a UserInput
     * @example
     * // Get one UserInput
     * const userInput = await prisma.userInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInputFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserInputFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserInputClient<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInputs
     * const userInputs = await prisma.userInput.findMany()
     *
     * // Get first 10 UserInputs
     * const userInputs = await prisma.userInput.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userInputWithIdOnly = await prisma.userInput.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserInputFindManyArgs>(
      args?: SelectSubset<T, UserInputFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserInput.
     * @param {UserInputCreateArgs} args - Arguments to create a UserInput.
     * @example
     * // Create one UserInput
     * const UserInput = await prisma.userInput.create({
     *   data: {
     *     // ... data to create a UserInput
     *   }
     * })
     *
     */
    create<T extends UserInputCreateArgs>(
      args: SelectSubset<T, UserInputCreateArgs<ExtArgs>>,
    ): Prisma__UserInputClient<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserInputs.
     * @param {UserInputCreateManyArgs} args - Arguments to create many UserInputs.
     * @example
     * // Create many UserInputs
     * const userInput = await prisma.userInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserInputCreateManyArgs>(
      args?: SelectSubset<T, UserInputCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserInputs and returns the data saved in the database.
     * @param {UserInputCreateManyAndReturnArgs} args - Arguments to create many UserInputs.
     * @example
     * // Create many UserInputs
     * const userInput = await prisma.userInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserInputs and only return the `id`
     * const userInputWithIdOnly = await prisma.userInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserInputCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserInputCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserInput.
     * @param {UserInputDeleteArgs} args - Arguments to delete one UserInput.
     * @example
     * // Delete one UserInput
     * const UserInput = await prisma.userInput.delete({
     *   where: {
     *     // ... filter to delete one UserInput
     *   }
     * })
     *
     */
    delete<T extends UserInputDeleteArgs>(
      args: SelectSubset<T, UserInputDeleteArgs<ExtArgs>>,
    ): Prisma__UserInputClient<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserInput.
     * @param {UserInputUpdateArgs} args - Arguments to update one UserInput.
     * @example
     * // Update one UserInput
     * const userInput = await prisma.userInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserInputUpdateArgs>(
      args: SelectSubset<T, UserInputUpdateArgs<ExtArgs>>,
    ): Prisma__UserInputClient<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserInputs.
     * @param {UserInputDeleteManyArgs} args - Arguments to filter UserInputs to delete.
     * @example
     * // Delete a few UserInputs
     * const { count } = await prisma.userInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserInputDeleteManyArgs>(
      args?: SelectSubset<T, UserInputDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInputs
     * const userInput = await prisma.userInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserInputUpdateManyArgs>(
      args: SelectSubset<T, UserInputUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserInputs and returns the data updated in the database.
     * @param {UserInputUpdateManyAndReturnArgs} args - Arguments to update many UserInputs.
     * @example
     * // Update many UserInputs
     * const userInput = await prisma.userInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserInputs and only return the `id`
     * const userInputWithIdOnly = await prisma.userInput.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserInputUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserInputUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserInput.
     * @param {UserInputUpsertArgs} args - Arguments to update or create a UserInput.
     * @example
     * // Update or create a UserInput
     * const userInput = await prisma.userInput.upsert({
     *   create: {
     *     // ... data to create a UserInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInput we want to update
     *   }
     * })
     */
    upsert<T extends UserInputUpsertArgs>(
      args: SelectSubset<T, UserInputUpsertArgs<ExtArgs>>,
    ): Prisma__UserInputClient<
      $Result.GetResult<
        Prisma.$UserInputPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputCountArgs} args - Arguments to filter UserInputs to count.
     * @example
     * // Count the number of UserInputs
     * const count = await prisma.userInput.count({
     *   where: {
     *     // ... the filter for the UserInputs we want to count
     *   }
     * })
     **/
    count<T extends UserInputCountArgs>(
      args?: Subset<T, UserInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInputCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserInputAggregateArgs>(
      args: Subset<T, UserInputAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserInputAggregateType<T>>;

    /**
     * Group by UserInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInputGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInputGroupByArgs['orderBy'] }
        : { orderBy?: UserInputGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserInputGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserInputGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserInput model
     */
    readonly fields: UserInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInputClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AuthorDefaultArgs<ExtArgs>>,
    ): Prisma__AuthorClient<
      | $Result.GetResult<
          Prisma.$AuthorPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SubjectDefaultArgs<ExtArgs>>,
    ): Prisma__SubjectClient<
      | $Result.GetResult<
          Prisma.$SubjectPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserInput model
   */
  interface UserInputFieldRefs {
    readonly id: FieldRef<'UserInput', 'Int'>;
    readonly type: FieldRef<'UserInput', 'UserInputType'>;
    readonly createdAt: FieldRef<'UserInput', 'DateTime'>;
    readonly updatedAt: FieldRef<'UserInput', 'DateTime'>;
    readonly authorId: FieldRef<'UserInput', 'Int'>;
    readonly subjectId: FieldRef<'UserInput', 'Int'>;
    readonly content: FieldRef<'UserInput', 'String'>;
  }

  // Custom InputTypes
  /**
   * UserInput findUnique
   */
  export type UserInputFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    /**
     * Filter, which UserInput to fetch.
     */
    where: UserInputWhereUniqueInput;
  };

  /**
   * UserInput findUniqueOrThrow
   */
  export type UserInputFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    /**
     * Filter, which UserInput to fetch.
     */
    where: UserInputWhereUniqueInput;
  };

  /**
   * UserInput findFirst
   */
  export type UserInputFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    /**
     * Filter, which UserInput to fetch.
     */
    where?: UserInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserInputs to fetch.
     */
    orderBy?:
      | UserInputOrderByWithRelationInput
      | UserInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserInputs.
     */
    cursor?: UserInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserInputs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserInputs.
     */
    distinct?: UserInputScalarFieldEnum | UserInputScalarFieldEnum[];
  };

  /**
   * UserInput findFirstOrThrow
   */
  export type UserInputFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    /**
     * Filter, which UserInput to fetch.
     */
    where?: UserInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserInputs to fetch.
     */
    orderBy?:
      | UserInputOrderByWithRelationInput
      | UserInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserInputs.
     */
    cursor?: UserInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserInputs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserInputs.
     */
    distinct?: UserInputScalarFieldEnum | UserInputScalarFieldEnum[];
  };

  /**
   * UserInput findMany
   */
  export type UserInputFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    /**
     * Filter, which UserInputs to fetch.
     */
    where?: UserInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserInputs to fetch.
     */
    orderBy?:
      | UserInputOrderByWithRelationInput
      | UserInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserInputs.
     */
    cursor?: UserInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserInputs.
     */
    skip?: number;
    distinct?: UserInputScalarFieldEnum | UserInputScalarFieldEnum[];
  };

  /**
   * UserInput create
   */
  export type UserInputCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserInput.
     */
    data: XOR<UserInputCreateInput, UserInputUncheckedCreateInput>;
  };

  /**
   * UserInput createMany
   */
  export type UserInputCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserInputs.
     */
    data: UserInputCreateManyInput | UserInputCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserInput createManyAndReturn
   */
  export type UserInputCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * The data used to create many UserInputs.
     */
    data: UserInputCreateManyInput | UserInputCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserInput update
   */
  export type UserInputUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserInput.
     */
    data: XOR<UserInputUpdateInput, UserInputUncheckedUpdateInput>;
    /**
     * Choose, which UserInput to update.
     */
    where: UserInputWhereUniqueInput;
  };

  /**
   * UserInput updateMany
   */
  export type UserInputUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserInputs.
     */
    data: XOR<
      UserInputUpdateManyMutationInput,
      UserInputUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserInputs to update
     */
    where?: UserInputWhereInput;
    /**
     * Limit how many UserInputs to update.
     */
    limit?: number;
  };

  /**
   * UserInput updateManyAndReturn
   */
  export type UserInputUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * The data used to update UserInputs.
     */
    data: XOR<
      UserInputUpdateManyMutationInput,
      UserInputUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserInputs to update
     */
    where?: UserInputWhereInput;
    /**
     * Limit how many UserInputs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserInput upsert
   */
  export type UserInputUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserInput to update in case it exists.
     */
    where: UserInputWhereUniqueInput;
    /**
     * In case the UserInput found by the `where` argument doesn't exist, create a new UserInput with this data.
     */
    create: XOR<UserInputCreateInput, UserInputUncheckedCreateInput>;
    /**
     * In case the UserInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInputUpdateInput, UserInputUncheckedUpdateInput>;
  };

  /**
   * UserInput delete
   */
  export type UserInputDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
    /**
     * Filter which UserInput to delete.
     */
    where: UserInputWhereUniqueInput;
  };

  /**
   * UserInput deleteMany
   */
  export type UserInputDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserInputs to delete
     */
    where?: UserInputWhereInput;
    /**
     * Limit how many UserInputs to delete.
     */
    limit?: number;
  };

  /**
   * UserInput without action
   */
  export type UserInputDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserInput
     */
    select?: UserInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInput
     */
    omit?: UserInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInputInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AuthorScalarFieldEnum: {
    id: 'id';
    firstName: 'firstName';
    lastName: 'lastName';
  };

  export type AuthorScalarFieldEnum =
    (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum];

  export const SubjectScalarFieldEnum: {
    id: 'id';
    title: 'title';
    content: 'content';
  };

  export type SubjectScalarFieldEnum =
    (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];

  export const UserInputScalarFieldEnum: {
    id: 'id';
    type: 'type';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    authorId: 'authorId';
    subjectId: 'subjectId';
    content: 'content';
  };

  export type UserInputScalarFieldEnum =
    (typeof UserInputScalarFieldEnum)[keyof typeof UserInputScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'UserInputType'
   */
  export type EnumUserInputTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserInputType'
  >;

  /**
   * Reference to a field of type 'UserInputType[]'
   */
  export type ListEnumUserInputTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'UserInputType[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[];
    OR?: AuthorWhereInput[];
    NOT?: AuthorWhereInput | AuthorWhereInput[];
    id?: IntFilter<'Author'> | number;
    firstName?: StringNullableFilter<'Author'> | string | null;
    lastName?: StringNullableFilter<'Author'> | string | null;
    UserInput?: UserInputListRelationFilter;
  };

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    UserInput?: UserInputOrderByRelationAggregateInput;
  };

  export type AuthorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: AuthorWhereInput | AuthorWhereInput[];
      OR?: AuthorWhereInput[];
      NOT?: AuthorWhereInput | AuthorWhereInput[];
      firstName?: StringNullableFilter<'Author'> | string | null;
      lastName?: StringNullableFilter<'Author'> | string | null;
      UserInput?: UserInputListRelationFilter;
    },
    'id'
  >;

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    _count?: AuthorCountOrderByAggregateInput;
    _avg?: AuthorAvgOrderByAggregateInput;
    _max?: AuthorMaxOrderByAggregateInput;
    _min?: AuthorMinOrderByAggregateInput;
    _sum?: AuthorSumOrderByAggregateInput;
  };

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?:
      | AuthorScalarWhereWithAggregatesInput
      | AuthorScalarWhereWithAggregatesInput[];
    OR?: AuthorScalarWhereWithAggregatesInput[];
    NOT?:
      | AuthorScalarWhereWithAggregatesInput
      | AuthorScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Author'> | number;
    firstName?: StringNullableWithAggregatesFilter<'Author'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'Author'> | string | null;
  };

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[];
    OR?: SubjectWhereInput[];
    NOT?: SubjectWhereInput | SubjectWhereInput[];
    id?: IntFilter<'Subject'> | number;
    title?: StringNullableFilter<'Subject'> | string | null;
    content?: StringNullableFilter<'Subject'> | string | null;
    UserInput?: UserInputListRelationFilter;
  };

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrderInput | SortOrder;
    content?: SortOrderInput | SortOrder;
    UserInput?: UserInputOrderByRelationAggregateInput;
  };

  export type SubjectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: SubjectWhereInput | SubjectWhereInput[];
      OR?: SubjectWhereInput[];
      NOT?: SubjectWhereInput | SubjectWhereInput[];
      title?: StringNullableFilter<'Subject'> | string | null;
      content?: StringNullableFilter<'Subject'> | string | null;
      UserInput?: UserInputListRelationFilter;
    },
    'id'
  >;

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrderInput | SortOrder;
    content?: SortOrderInput | SortOrder;
    _count?: SubjectCountOrderByAggregateInput;
    _avg?: SubjectAvgOrderByAggregateInput;
    _max?: SubjectMaxOrderByAggregateInput;
    _min?: SubjectMinOrderByAggregateInput;
    _sum?: SubjectSumOrderByAggregateInput;
  };

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?:
      | SubjectScalarWhereWithAggregatesInput
      | SubjectScalarWhereWithAggregatesInput[];
    OR?: SubjectScalarWhereWithAggregatesInput[];
    NOT?:
      | SubjectScalarWhereWithAggregatesInput
      | SubjectScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Subject'> | number;
    title?: StringNullableWithAggregatesFilter<'Subject'> | string | null;
    content?: StringNullableWithAggregatesFilter<'Subject'> | string | null;
  };

  export type UserInputWhereInput = {
    AND?: UserInputWhereInput | UserInputWhereInput[];
    OR?: UserInputWhereInput[];
    NOT?: UserInputWhereInput | UserInputWhereInput[];
    id?: IntFilter<'UserInput'> | number;
    type?: EnumUserInputTypeFilter<'UserInput'> | $Enums.UserInputType;
    createdAt?: DateTimeFilter<'UserInput'> | Date | string;
    updatedAt?: DateTimeFilter<'UserInput'> | Date | string;
    authorId?: IntFilter<'UserInput'> | number;
    subjectId?: IntFilter<'UserInput'> | number;
    content?: StringFilter<'UserInput'> | string;
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>;
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>;
  };

  export type UserInputOrderByWithRelationInput = {
    id?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    subjectId?: SortOrder;
    content?: SortOrder;
    author?: AuthorOrderByWithRelationInput;
    subject?: SubjectOrderByWithRelationInput;
  };

  export type UserInputWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: UserInputWhereInput | UserInputWhereInput[];
      OR?: UserInputWhereInput[];
      NOT?: UserInputWhereInput | UserInputWhereInput[];
      type?: EnumUserInputTypeFilter<'UserInput'> | $Enums.UserInputType;
      createdAt?: DateTimeFilter<'UserInput'> | Date | string;
      updatedAt?: DateTimeFilter<'UserInput'> | Date | string;
      authorId?: IntFilter<'UserInput'> | number;
      subjectId?: IntFilter<'UserInput'> | number;
      content?: StringFilter<'UserInput'> | string;
      author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>;
      subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>;
    },
    'id'
  >;

  export type UserInputOrderByWithAggregationInput = {
    id?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    subjectId?: SortOrder;
    content?: SortOrder;
    _count?: UserInputCountOrderByAggregateInput;
    _avg?: UserInputAvgOrderByAggregateInput;
    _max?: UserInputMaxOrderByAggregateInput;
    _min?: UserInputMinOrderByAggregateInput;
    _sum?: UserInputSumOrderByAggregateInput;
  };

  export type UserInputScalarWhereWithAggregatesInput = {
    AND?:
      | UserInputScalarWhereWithAggregatesInput
      | UserInputScalarWhereWithAggregatesInput[];
    OR?: UserInputScalarWhereWithAggregatesInput[];
    NOT?:
      | UserInputScalarWhereWithAggregatesInput
      | UserInputScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'UserInput'> | number;
    type?:
      | EnumUserInputTypeWithAggregatesFilter<'UserInput'>
      | $Enums.UserInputType;
    createdAt?: DateTimeWithAggregatesFilter<'UserInput'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'UserInput'> | Date | string;
    authorId?: IntWithAggregatesFilter<'UserInput'> | number;
    subjectId?: IntWithAggregatesFilter<'UserInput'> | number;
    content?: StringWithAggregatesFilter<'UserInput'> | string;
  };

  export type AuthorCreateInput = {
    firstName?: string | null;
    lastName?: string | null;
    UserInput?: UserInputCreateNestedManyWithoutAuthorInput;
  };

  export type AuthorUncheckedCreateInput = {
    id?: number;
    firstName?: string | null;
    lastName?: string | null;
    UserInput?: UserInputUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type AuthorUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    UserInput?: UserInputUpdateManyWithoutAuthorNestedInput;
  };

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    UserInput?: UserInputUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type AuthorCreateManyInput = {
    id?: number;
    firstName?: string | null;
    lastName?: string | null;
  };

  export type AuthorUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SubjectCreateInput = {
    title?: string | null;
    content?: string | null;
    UserInput?: UserInputCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectUncheckedCreateInput = {
    id?: number;
    title?: string | null;
    content?: string | null;
    UserInput?: UserInputUncheckedCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    UserInput?: UserInputUpdateManyWithoutSubjectNestedInput;
  };

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    UserInput?: UserInputUncheckedUpdateManyWithoutSubjectNestedInput;
  };

  export type SubjectCreateManyInput = {
    id?: number;
    title?: string | null;
    content?: string | null;
  };

  export type SubjectUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserInputCreateInput = {
    type: $Enums.UserInputType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    content: string;
    author: AuthorCreateNestedOneWithoutUserInputInput;
    subject: SubjectCreateNestedOneWithoutUserInputInput;
  };

  export type UserInputUncheckedCreateInput = {
    id?: number;
    type: $Enums.UserInputType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    subjectId: number;
    content: string;
  };

  export type UserInputUpdateInput = {
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: StringFieldUpdateOperationsInput | string;
    author?: AuthorUpdateOneRequiredWithoutUserInputNestedInput;
    subject?: SubjectUpdateOneRequiredWithoutUserInputNestedInput;
  };

  export type UserInputUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    subjectId?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
  };

  export type UserInputCreateManyInput = {
    id?: number;
    type: $Enums.UserInputType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    subjectId: number;
    content: string;
  };

  export type UserInputUpdateManyMutationInput = {
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: StringFieldUpdateOperationsInput | string;
  };

  export type UserInputUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    subjectId?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserInputListRelationFilter = {
    every?: UserInputWhereInput;
    some?: UserInputWhereInput;
    none?: UserInputWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserInputOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
  };

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
  };

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
  };

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
  };

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
  };

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
  };

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type EnumUserInputTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.UserInputType
      | EnumUserInputTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.UserInputType[]
      | ListEnumUserInputTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.UserInputType[]
      | ListEnumUserInputTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserInputTypeFilter<$PrismaModel> | $Enums.UserInputType;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput;
    isNot?: AuthorWhereInput;
  };

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput;
    isNot?: SubjectWhereInput;
  };

  export type UserInputCountOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    subjectId?: SortOrder;
    content?: SortOrder;
  };

  export type UserInputAvgOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    subjectId?: SortOrder;
  };

  export type UserInputMaxOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    subjectId?: SortOrder;
    content?: SortOrder;
  };

  export type UserInputMinOrderByAggregateInput = {
    id?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    authorId?: SortOrder;
    subjectId?: SortOrder;
    content?: SortOrder;
  };

  export type UserInputSumOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    subjectId?: SortOrder;
  };

  export type EnumUserInputTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.UserInputType
      | EnumUserInputTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.UserInputType[]
      | ListEnumUserInputTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.UserInputType[]
      | ListEnumUserInputTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserInputTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.UserInputType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserInputTypeFilter<$PrismaModel>;
    _max?: NestedEnumUserInputTypeFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type UserInputCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          UserInputCreateWithoutAuthorInput,
          UserInputUncheckedCreateWithoutAuthorInput
        >
      | UserInputCreateWithoutAuthorInput[]
      | UserInputUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | UserInputCreateOrConnectWithoutAuthorInput
      | UserInputCreateOrConnectWithoutAuthorInput[];
    createMany?: UserInputCreateManyAuthorInputEnvelope;
    connect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
  };

  export type UserInputUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          UserInputCreateWithoutAuthorInput,
          UserInputUncheckedCreateWithoutAuthorInput
        >
      | UserInputCreateWithoutAuthorInput[]
      | UserInputUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | UserInputCreateOrConnectWithoutAuthorInput
      | UserInputCreateOrConnectWithoutAuthorInput[];
    createMany?: UserInputCreateManyAuthorInputEnvelope;
    connect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserInputUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          UserInputCreateWithoutAuthorInput,
          UserInputUncheckedCreateWithoutAuthorInput
        >
      | UserInputCreateWithoutAuthorInput[]
      | UserInputUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | UserInputCreateOrConnectWithoutAuthorInput
      | UserInputCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | UserInputUpsertWithWhereUniqueWithoutAuthorInput
      | UserInputUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: UserInputCreateManyAuthorInputEnvelope;
    set?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    disconnect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    delete?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    connect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    update?:
      | UserInputUpdateWithWhereUniqueWithoutAuthorInput
      | UserInputUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | UserInputUpdateManyWithWhereWithoutAuthorInput
      | UserInputUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: UserInputScalarWhereInput | UserInputScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserInputUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          UserInputCreateWithoutAuthorInput,
          UserInputUncheckedCreateWithoutAuthorInput
        >
      | UserInputCreateWithoutAuthorInput[]
      | UserInputUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | UserInputCreateOrConnectWithoutAuthorInput
      | UserInputCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | UserInputUpsertWithWhereUniqueWithoutAuthorInput
      | UserInputUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: UserInputCreateManyAuthorInputEnvelope;
    set?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    disconnect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    delete?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    connect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    update?:
      | UserInputUpdateWithWhereUniqueWithoutAuthorInput
      | UserInputUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | UserInputUpdateManyWithWhereWithoutAuthorInput
      | UserInputUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: UserInputScalarWhereInput | UserInputScalarWhereInput[];
  };

  export type UserInputCreateNestedManyWithoutSubjectInput = {
    create?:
      | XOR<
          UserInputCreateWithoutSubjectInput,
          UserInputUncheckedCreateWithoutSubjectInput
        >
      | UserInputCreateWithoutSubjectInput[]
      | UserInputUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | UserInputCreateOrConnectWithoutSubjectInput
      | UserInputCreateOrConnectWithoutSubjectInput[];
    createMany?: UserInputCreateManySubjectInputEnvelope;
    connect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
  };

  export type UserInputUncheckedCreateNestedManyWithoutSubjectInput = {
    create?:
      | XOR<
          UserInputCreateWithoutSubjectInput,
          UserInputUncheckedCreateWithoutSubjectInput
        >
      | UserInputCreateWithoutSubjectInput[]
      | UserInputUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | UserInputCreateOrConnectWithoutSubjectInput
      | UserInputCreateOrConnectWithoutSubjectInput[];
    createMany?: UserInputCreateManySubjectInputEnvelope;
    connect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
  };

  export type UserInputUpdateManyWithoutSubjectNestedInput = {
    create?:
      | XOR<
          UserInputCreateWithoutSubjectInput,
          UserInputUncheckedCreateWithoutSubjectInput
        >
      | UserInputCreateWithoutSubjectInput[]
      | UserInputUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | UserInputCreateOrConnectWithoutSubjectInput
      | UserInputCreateOrConnectWithoutSubjectInput[];
    upsert?:
      | UserInputUpsertWithWhereUniqueWithoutSubjectInput
      | UserInputUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: UserInputCreateManySubjectInputEnvelope;
    set?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    disconnect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    delete?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    connect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    update?:
      | UserInputUpdateWithWhereUniqueWithoutSubjectInput
      | UserInputUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?:
      | UserInputUpdateManyWithWhereWithoutSubjectInput
      | UserInputUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: UserInputScalarWhereInput | UserInputScalarWhereInput[];
  };

  export type UserInputUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?:
      | XOR<
          UserInputCreateWithoutSubjectInput,
          UserInputUncheckedCreateWithoutSubjectInput
        >
      | UserInputCreateWithoutSubjectInput[]
      | UserInputUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | UserInputCreateOrConnectWithoutSubjectInput
      | UserInputCreateOrConnectWithoutSubjectInput[];
    upsert?:
      | UserInputUpsertWithWhereUniqueWithoutSubjectInput
      | UserInputUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: UserInputCreateManySubjectInputEnvelope;
    set?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    disconnect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    delete?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    connect?: UserInputWhereUniqueInput | UserInputWhereUniqueInput[];
    update?:
      | UserInputUpdateWithWhereUniqueWithoutSubjectInput
      | UserInputUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?:
      | UserInputUpdateManyWithWhereWithoutSubjectInput
      | UserInputUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: UserInputScalarWhereInput | UserInputScalarWhereInput[];
  };

  export type AuthorCreateNestedOneWithoutUserInputInput = {
    create?: XOR<
      AuthorCreateWithoutUserInputInput,
      AuthorUncheckedCreateWithoutUserInputInput
    >;
    connectOrCreate?: AuthorCreateOrConnectWithoutUserInputInput;
    connect?: AuthorWhereUniqueInput;
  };

  export type SubjectCreateNestedOneWithoutUserInputInput = {
    create?: XOR<
      SubjectCreateWithoutUserInputInput,
      SubjectUncheckedCreateWithoutUserInputInput
    >;
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInputInput;
    connect?: SubjectWhereUniqueInput;
  };

  export type EnumUserInputTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserInputType;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type AuthorUpdateOneRequiredWithoutUserInputNestedInput = {
    create?: XOR<
      AuthorCreateWithoutUserInputInput,
      AuthorUncheckedCreateWithoutUserInputInput
    >;
    connectOrCreate?: AuthorCreateOrConnectWithoutUserInputInput;
    upsert?: AuthorUpsertWithoutUserInputInput;
    connect?: AuthorWhereUniqueInput;
    update?: XOR<
      XOR<
        AuthorUpdateToOneWithWhereWithoutUserInputInput,
        AuthorUpdateWithoutUserInputInput
      >,
      AuthorUncheckedUpdateWithoutUserInputInput
    >;
  };

  export type SubjectUpdateOneRequiredWithoutUserInputNestedInput = {
    create?: XOR<
      SubjectCreateWithoutUserInputInput,
      SubjectUncheckedCreateWithoutUserInputInput
    >;
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInputInput;
    upsert?: SubjectUpsertWithoutUserInputInput;
    connect?: SubjectWhereUniqueInput;
    update?: XOR<
      XOR<
        SubjectUpdateToOneWithWhereWithoutUserInputInput,
        SubjectUpdateWithoutUserInputInput
      >,
      SubjectUncheckedUpdateWithoutUserInputInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumUserInputTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.UserInputType
      | EnumUserInputTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.UserInputType[]
      | ListEnumUserInputTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.UserInputType[]
      | ListEnumUserInputTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserInputTypeFilter<$PrismaModel> | $Enums.UserInputType;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumUserInputTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.UserInputType
      | EnumUserInputTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.UserInputType[]
      | ListEnumUserInputTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.UserInputType[]
      | ListEnumUserInputTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserInputTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.UserInputType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserInputTypeFilter<$PrismaModel>;
    _max?: NestedEnumUserInputTypeFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type UserInputCreateWithoutAuthorInput = {
    type: $Enums.UserInputType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    content: string;
    subject: SubjectCreateNestedOneWithoutUserInputInput;
  };

  export type UserInputUncheckedCreateWithoutAuthorInput = {
    id?: number;
    type: $Enums.UserInputType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjectId: number;
    content: string;
  };

  export type UserInputCreateOrConnectWithoutAuthorInput = {
    where: UserInputWhereUniqueInput;
    create: XOR<
      UserInputCreateWithoutAuthorInput,
      UserInputUncheckedCreateWithoutAuthorInput
    >;
  };

  export type UserInputCreateManyAuthorInputEnvelope = {
    data: UserInputCreateManyAuthorInput | UserInputCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type UserInputUpsertWithWhereUniqueWithoutAuthorInput = {
    where: UserInputWhereUniqueInput;
    update: XOR<
      UserInputUpdateWithoutAuthorInput,
      UserInputUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      UserInputCreateWithoutAuthorInput,
      UserInputUncheckedCreateWithoutAuthorInput
    >;
  };

  export type UserInputUpdateWithWhereUniqueWithoutAuthorInput = {
    where: UserInputWhereUniqueInput;
    data: XOR<
      UserInputUpdateWithoutAuthorInput,
      UserInputUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type UserInputUpdateManyWithWhereWithoutAuthorInput = {
    where: UserInputScalarWhereInput;
    data: XOR<
      UserInputUpdateManyMutationInput,
      UserInputUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type UserInputScalarWhereInput = {
    AND?: UserInputScalarWhereInput | UserInputScalarWhereInput[];
    OR?: UserInputScalarWhereInput[];
    NOT?: UserInputScalarWhereInput | UserInputScalarWhereInput[];
    id?: IntFilter<'UserInput'> | number;
    type?: EnumUserInputTypeFilter<'UserInput'> | $Enums.UserInputType;
    createdAt?: DateTimeFilter<'UserInput'> | Date | string;
    updatedAt?: DateTimeFilter<'UserInput'> | Date | string;
    authorId?: IntFilter<'UserInput'> | number;
    subjectId?: IntFilter<'UserInput'> | number;
    content?: StringFilter<'UserInput'> | string;
  };

  export type UserInputCreateWithoutSubjectInput = {
    type: $Enums.UserInputType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    content: string;
    author: AuthorCreateNestedOneWithoutUserInputInput;
  };

  export type UserInputUncheckedCreateWithoutSubjectInput = {
    id?: number;
    type: $Enums.UserInputType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    content: string;
  };

  export type UserInputCreateOrConnectWithoutSubjectInput = {
    where: UserInputWhereUniqueInput;
    create: XOR<
      UserInputCreateWithoutSubjectInput,
      UserInputUncheckedCreateWithoutSubjectInput
    >;
  };

  export type UserInputCreateManySubjectInputEnvelope = {
    data: UserInputCreateManySubjectInput | UserInputCreateManySubjectInput[];
    skipDuplicates?: boolean;
  };

  export type UserInputUpsertWithWhereUniqueWithoutSubjectInput = {
    where: UserInputWhereUniqueInput;
    update: XOR<
      UserInputUpdateWithoutSubjectInput,
      UserInputUncheckedUpdateWithoutSubjectInput
    >;
    create: XOR<
      UserInputCreateWithoutSubjectInput,
      UserInputUncheckedCreateWithoutSubjectInput
    >;
  };

  export type UserInputUpdateWithWhereUniqueWithoutSubjectInput = {
    where: UserInputWhereUniqueInput;
    data: XOR<
      UserInputUpdateWithoutSubjectInput,
      UserInputUncheckedUpdateWithoutSubjectInput
    >;
  };

  export type UserInputUpdateManyWithWhereWithoutSubjectInput = {
    where: UserInputScalarWhereInput;
    data: XOR<
      UserInputUpdateManyMutationInput,
      UserInputUncheckedUpdateManyWithoutSubjectInput
    >;
  };

  export type AuthorCreateWithoutUserInputInput = {
    firstName?: string | null;
    lastName?: string | null;
  };

  export type AuthorUncheckedCreateWithoutUserInputInput = {
    id?: number;
    firstName?: string | null;
    lastName?: string | null;
  };

  export type AuthorCreateOrConnectWithoutUserInputInput = {
    where: AuthorWhereUniqueInput;
    create: XOR<
      AuthorCreateWithoutUserInputInput,
      AuthorUncheckedCreateWithoutUserInputInput
    >;
  };

  export type SubjectCreateWithoutUserInputInput = {
    title?: string | null;
    content?: string | null;
  };

  export type SubjectUncheckedCreateWithoutUserInputInput = {
    id?: number;
    title?: string | null;
    content?: string | null;
  };

  export type SubjectCreateOrConnectWithoutUserInputInput = {
    where: SubjectWhereUniqueInput;
    create: XOR<
      SubjectCreateWithoutUserInputInput,
      SubjectUncheckedCreateWithoutUserInputInput
    >;
  };

  export type AuthorUpsertWithoutUserInputInput = {
    update: XOR<
      AuthorUpdateWithoutUserInputInput,
      AuthorUncheckedUpdateWithoutUserInputInput
    >;
    create: XOR<
      AuthorCreateWithoutUserInputInput,
      AuthorUncheckedCreateWithoutUserInputInput
    >;
    where?: AuthorWhereInput;
  };

  export type AuthorUpdateToOneWithWhereWithoutUserInputInput = {
    where?: AuthorWhereInput;
    data: XOR<
      AuthorUpdateWithoutUserInputInput,
      AuthorUncheckedUpdateWithoutUserInputInput
    >;
  };

  export type AuthorUpdateWithoutUserInputInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthorUncheckedUpdateWithoutUserInputInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SubjectUpsertWithoutUserInputInput = {
    update: XOR<
      SubjectUpdateWithoutUserInputInput,
      SubjectUncheckedUpdateWithoutUserInputInput
    >;
    create: XOR<
      SubjectCreateWithoutUserInputInput,
      SubjectUncheckedCreateWithoutUserInputInput
    >;
    where?: SubjectWhereInput;
  };

  export type SubjectUpdateToOneWithWhereWithoutUserInputInput = {
    where?: SubjectWhereInput;
    data: XOR<
      SubjectUpdateWithoutUserInputInput,
      SubjectUncheckedUpdateWithoutUserInputInput
    >;
  };

  export type SubjectUpdateWithoutUserInputInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SubjectUncheckedUpdateWithoutUserInputInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserInputCreateManyAuthorInput = {
    id?: number;
    type: $Enums.UserInputType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjectId: number;
    content: string;
  };

  export type UserInputUpdateWithoutAuthorInput = {
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: StringFieldUpdateOperationsInput | string;
    subject?: SubjectUpdateOneRequiredWithoutUserInputNestedInput;
  };

  export type UserInputUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subjectId?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
  };

  export type UserInputUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subjectId?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
  };

  export type UserInputCreateManySubjectInput = {
    id?: number;
    type: $Enums.UserInputType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorId: number;
    content: string;
  };

  export type UserInputUpdateWithoutSubjectInput = {
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: StringFieldUpdateOperationsInput | string;
    author?: AuthorUpdateOneRequiredWithoutUserInputNestedInput;
  };

  export type UserInputUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number;
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
  };

  export type UserInputUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number;
    type?: EnumUserInputTypeFieldUpdateOperationsInput | $Enums.UserInputType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
