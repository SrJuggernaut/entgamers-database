import { Prisma, PrismaClient, type $Enums } from '@prisma/client'

const prismaClient = new PrismaClient()

export { $Enums, Prisma }

export default prismaClient
