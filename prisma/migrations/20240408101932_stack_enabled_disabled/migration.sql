/*
  Warnings:

  - The `type` column on the `Stacks` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Stacks" ADD COLUMN     "isEnabled" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "type",
ADD COLUMN     "type" "RoleType" NOT NULL DEFAULT 'FRONTEND';
