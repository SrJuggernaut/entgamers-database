import prismaClient from '../bin/prismaClient'
import { type Clan, type Prisma } from '@prisma/client'

export const getClan = async (clanFindUniqueArgs: Prisma.ClanFindUniqueArgs): Promise<Clan> => {
  const clan = await prismaClient.clan.findUnique(clanFindUniqueArgs)

  if (clan === null) {
    throw new Error('Clan not found')
  }

  return clan
}

export const getClanes = async (clanFindManyArgs: Prisma.ClanFindManyArgs): Promise<Clan[]> => {
  return await prismaClient.clan.findMany(clanFindManyArgs)
}

export const createClan = async (clanCreateArgs: Prisma.ClanCreateArgs): Promise<Clan> => {
  return await prismaClient.clan.create(clanCreateArgs)
}

export const updateClan = async (clanUpdateArgs: Prisma.ClanUpdateArgs): Promise<Clan> => {
  return await prismaClient.clan.update(clanUpdateArgs)
}

export const deleteClan = async (clanDeleteArgs: Prisma.ClanDeleteArgs): Promise<Clan> => {
  return await prismaClient.clan.delete(clanDeleteArgs)
}
