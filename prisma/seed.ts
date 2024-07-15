import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const category_1 = await prisma.categories.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Category 1',
      description: 'Lorem Ipsum',
      active: true
    },
  })
  const category_2 = await prisma.categories.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Category 2',
      description: 'Lorem Ipsum',
      active: false
    },
  })
  const category_3 = await prisma.categories.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Category 3',
      description: 'Lorem Ipsum',
      active: true
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })