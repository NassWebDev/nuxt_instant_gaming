/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Favorites` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_userId_fkey";

-- DropIndex
DROP INDEX "Comment_userId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "favorites" TEXT[],
ADD COLUMN     "userName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Favorites";
