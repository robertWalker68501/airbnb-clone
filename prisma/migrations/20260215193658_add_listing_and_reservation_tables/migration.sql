-- CreateTable
CREATE TABLE "listing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "roomCount" INTEGER NOT NULL,
    "bathroomCount" INTEGER NOT NULL,
    "guestCount" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "locationValue" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservation" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "listing_userId_idx" ON "listing"("userId");

-- CreateIndex
CREATE INDEX "listing_locationValue_idx" ON "listing"("locationValue");

-- CreateIndex
CREATE INDEX "listing_category_idx" ON "listing"("category");

-- CreateIndex
CREATE INDEX "reservation_listingId_idx" ON "reservation"("listingId");

-- CreateIndex
CREATE INDEX "reservation_userId_idx" ON "reservation"("userId");

-- AddForeignKey
ALTER TABLE "listing" ADD CONSTRAINT "listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
