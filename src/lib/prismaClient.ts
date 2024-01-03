import { PrismaClient, type $Enums, type Prisma } from '@prisma/client'

const prismaClient = new PrismaClient()

export type { $Enums, Prisma }

export default prismaClient
