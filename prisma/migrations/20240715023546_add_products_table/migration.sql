/*
  Warnings:

  - You are about to drop the column `title` on the `Categories` table. All the data in the column will be lost.
  - Added the required column `name` to the `Categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Categories` DROP COLUMN `title`,
    ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `name` VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(30) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `category_id` INTEGER NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `size` ENUM('SMALL', 'MEDIUM', 'LARGE', 'EXTRA_LARGE') NOT NULL DEFAULT 'SMALL',

    UNIQUE INDEX `Products_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
