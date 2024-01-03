import { ID, type Models } from 'node-appwrite'
import { appwriteNodeTeams } from '../../bin/appriteNode'

export type ClanPreferences = Record<string, any>

export const getClanes = async (): Promise<Models.TeamList<ClanPreferences>> => {
  const clanes = await appwriteNodeTeams.list()
  return clanes
}

export const getClan = async (clanId: string): Promise<Models.Team<ClanPreferences>> => {
  const clan = await appwriteNodeTeams.get(clanId)
  return clan
}

export const getClanMembers = async (clanId: string): Promise<Models.MembershipList> => {
  const clanMembers = await appwriteNodeTeams.listMemberships(clanId)
  return clanMembers
}

export const getClanMember = async (clanId: string, memberId: string): Promise<Models.Membership> => {
  const clanMember = await appwriteNodeTeams.getMembership(clanId, memberId)
  return clanMember
}

export const getClanPreferences = async (clanId: string): Promise<ClanPreferences> => {
  const clanPreferences = await appwriteNodeTeams.getPrefs(clanId)
  return clanPreferences
}

export const createClan = async (name: string, roles?: string[]): Promise<Models.Team<ClanPreferences>> => {
  const clan = await appwriteNodeTeams.create(ID.unique(), name, roles)
  return clan
}

export const inviteClanMember = async (clanId: string, roles: string[], email?: string, userId?: string): Promise<Models.Membership> => {
  const clanMember = await appwriteNodeTeams.createMembership(clanId, roles, email, userId)
  return clanMember
}

export const updateClanName = async (clanId: string, name: string): Promise<Models.Team<ClanPreferences>> => {
  const clan = await appwriteNodeTeams.updateName(clanId, name)
  return clan
}

export const updateClanMember = async (clanId: string, memberId: string, roles: string[]): Promise<Models.Membership> => {
  const clanMember = await appwriteNodeTeams.updateMembership(clanId, memberId, roles)
  return clanMember
}

export const updateClanPreferences = async (clanId: string, preferences: ClanPreferences): Promise<ClanPreferences> => {
  const clanPreferences = await appwriteNodeTeams.updatePrefs(clanId, preferences)
  return clanPreferences
}

export const deleteClan = async (clanId: string): Promise<void> => {
  await appwriteNodeTeams.delete(clanId)
}

export const deleteClanMember = async (clanId: string, memberId: string): Promise<string> => {
  const clanMember = await appwriteNodeTeams.deleteMembership(clanId, memberId)
  return clanMember
}
