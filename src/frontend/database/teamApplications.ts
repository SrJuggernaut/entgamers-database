import { appwriteDatabases, ID } from '../../lib/appwrite'
import { ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID } from '../../lib/env'
import { TeamApplication, TeamApplicationData, TeamApplicationList } from '../../types/teamApplications'

export const createTeamApplication = async (data: TeamApplicationData): Promise<Omit<TeamApplicationData, 'status'>> => {
  const teamApplication = await appwriteDatabases.createDocument<TeamApplication>(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, ID.unique(), data)
  return teamApplication
}

export const getTeamApplication = async (teamApplicationId: string, queries?: string[]): Promise<TeamApplication> => {
  const teamApplication = await appwriteDatabases.getDocument<TeamApplication>(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, teamApplicationId, queries)
  return teamApplication
}

export const getAllTeamApplications = async (queries?: string[]): Promise<TeamApplicationList> => {
  const teamApplications = await appwriteDatabases.listDocuments<TeamApplication>(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, queries)
  return teamApplications
}

export const updateTeamApplication = async (teamApplicationId: string, data: Partial<TeamApplicationData>): Promise<TeamApplication> => {
  const teamApplication = await appwriteDatabases.updateDocument<TeamApplication>(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, teamApplicationId, data)
  return teamApplication
}

export const deleteTeamApplication = async (teamApplicationId: string): Promise<void> => {
  await appwriteDatabases.deleteDocument(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, teamApplicationId)
}

export type { TeamApplicationRole, TeamApplicationStatus } from '../../types/teamApplications'
export type { TeamApplication, TeamApplicationData, TeamApplicationList }
