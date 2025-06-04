-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "content" TEXT,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);
