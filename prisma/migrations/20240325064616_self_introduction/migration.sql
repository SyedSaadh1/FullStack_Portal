-- CreateTable
CREATE TABLE "SelfIntroduction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "video" TEXT NOT NULL,
    "audio" TEXT NOT NULL,
    "text" TEXT,

    CONSTRAINT "SelfIntroduction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SelfIntroduction" ADD CONSTRAINT "SelfIntroduction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
