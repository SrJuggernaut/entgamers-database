import { appwriteNodeDatabases, ID, Permission, Role } from '../../lib/appriteNode'
import { ADMIN_CLAN_ID, ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID } from '../../lib/env'
import { TeamApplication, TeamApplicationData, TeamApplicationList } from '../../types/teamApplications'
import { ensureAdministrativeClans } from '../clanes/administrative'
import { ensureDatabase } from '../database'

export const ensureTeamApplicationsCollection = (() => {
  let teamApplicationsCollectionExists = false
  return async () => {
    if (teamApplicationsCollectionExists) return
    try {
      await ensureAdministrativeClans()
      await ensureDatabase(ADMINISTRATIVE_DATABASE_ID)
      await appwriteNodeDatabases.listCollections(ADMINISTRATIVE_DATABASE_ID)
    } catch (error) {
      const permissions = [
        Permission.create(Role.any()),
        Permission.read(Role.team(ADMIN_CLAN_ID)),
        Permission.update(Role.team(ADMIN_CLAN_ID)),
        Permission.delete(Role.team(ADMIN_CLAN_ID))
      ]
      const collectionName = 'Team Applications'
      const enableDocumentSecurity = false
      const enableCollection = true
      await appwriteNodeDatabases.createCollection(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, collectionName, permissions, enableDocumentSecurity, enableCollection)
      await appwriteNodeDatabases.createStringAttribute(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, 'name', 128, true, undefined, false, false)
      await appwriteNodeDatabases.createEmailAttribute(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, 'email', true, undefined, false)
      await appwriteNodeDatabases.createStringAttribute(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, 'discord', 56, true, undefined, false, false)
      await appwriteNodeDatabases.createStringAttribute(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, 'message', 4096, true, undefined, false, false)
      await appwriteNodeDatabases.createEnumAttribute(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, 'status', ['Pending', 'Accepted', 'Rejected'], true, 'Pending', false)
      await appwriteNodeDatabases.createEnumAttribute(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, 'role', ['Admin', 'Moderator', 'Collaborator', 'User'], true, undefined, false)
    } finally {
      teamApplicationsCollectionExists = true
    }
  }
})()

export const createTeamApplication = async (data: TeamApplicationData): Promise<TeamApplication> => {
  const teamApplication = await appwriteNodeDatabases.createDocument<TeamApplication>(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, ID.unique(), data)
  return teamApplication
}

export const getAllTeamApplications = async (queries?: string[]): Promise<TeamApplicationList> => {
  const teamApplications = await appwriteNodeDatabases.listDocuments<TeamApplication>(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, queries)
  return teamApplications
}

export const getTeamApplication = async (teamApplicationId: string, queries?: string[]): Promise<TeamApplication> => {
  const teamApplication = await appwriteNodeDatabases.getDocument<TeamApplication>(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, teamApplicationId, queries)
  return teamApplication
}

export const updateTeamApplication = async (teamApplicationId: string, data: Partial<TeamApplicationData>): Promise<TeamApplication> => {
  const teamApplication = await appwriteNodeDatabases.updateDocument<TeamApplication>(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, teamApplicationId, data)
  return teamApplication
}

export const deleteTeamApplication = async (teamApplicationId: string): Promise<void> => {
  await appwriteNodeDatabases.deleteDocument(ADMINISTRATIVE_DATABASE_ID, TEAM_APPLICATIONS_COLLECTION_ID, teamApplicationId)
}

export type { TeamApplicationRole, TeamApplicationStatus } from '../../types/teamApplications'
export type { TeamApplication, TeamApplicationData, TeamApplicationList }
