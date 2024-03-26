-- CreateTable
CREATE TABLE "UserResume" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "resumeContent" TEXT,
    "userContent" TEXT,
    "suggestionOne" TEXT,
    "suggestionTwo" TEXT,
    "suggestionThree" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserResume_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserResume" ADD CONSTRAINT "UserResume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
