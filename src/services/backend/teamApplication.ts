import { type Prisma, type TeamApplication } from '@prisma/client'
import PrismaClient from '../../bin/prismaClient'

export interface TeamApplicationList {
  teamApplications: TeamApplication[]
  total: number
}

export const getTeamApplications = async (findManyArgs?: Prisma.TeamApplicationFindManyArgs): Promise<TeamApplicationList> => {
  const teamApplications = await PrismaClient.teamApplication.findMany(findManyArgs)
  const total = await PrismaClient.teamApplication.count()
  return { teamApplications, total }
}

export const getTeamApplication = async (findUniqueArgs: Prisma.TeamApplicationFindUniqueArgs): Promise<TeamApplication> => {
  const teamApplication = await PrismaClient.teamApplication.findUnique(findUniqueArgs)
  if (teamApplication === null) {
    throw new Error('TeamApplication not found')
  }
  return teamApplication
}

export const createTeamApplication = async (createArgs: Prisma.TeamApplicationCreateArgs): Promise<TeamApplication> => {
  const teamApplication = await PrismaClient.teamApplication.create(createArgs)
  return teamApplication
}

export const updateTeamApplication = async (updateArgs: Prisma.TeamApplicationUpdateArgs): Promise<TeamApplication> => {
  const teamApplication = await PrismaClient.teamApplication.update(updateArgs)
  return teamApplication
}

export const deleteTeamApplication = async (deleteArgs: Prisma.TeamApplicationDeleteArgs): Promise<TeamApplication> => {
  const teamApplication = await PrismaClient.teamApplication.delete(deleteArgs)
  return teamApplication
}
