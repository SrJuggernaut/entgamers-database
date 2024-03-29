import { ID, type Models } from 'node-appwrite'
import { type ClanPreferences } from '../frontend/clanes'
import { appwriteNodeTeams } from '../lib/appriteNode'

export { type ClanPreferences }
export type ClanWithPreferences = Models.Team<ClanPreferences>
export type ClanList = Models.TeamList<ClanPreferences>
export type ClanMember = Models.Membership
export type ClanMemberList = Models.MembershipList

export const getClanes = async (): Promise<Models.TeamList<ClanPreferences>> => {
  const clanes = await appwriteNodeTeams.list()
  return clanes
}

export const getClan = async (clanId: string): Promise<ClanWithPreferences> => {
  const clan = await appwriteNodeTeams.get(clanId)
  return clan
}

export const getClanMembers = async (clanId: string): Promise<ClanMemberList> => {
  const clanMembers = await appwriteNodeTeams.listMemberships(clanId)
  return clanMembers
}

export const getClanMember = async (clanId: string, memberId: string): Promise<ClanMember> => {
  const clanMember = await appwriteNodeTeams.getMembership(clanId, memberId)
  return clanMember
}

export const getClanPreferences = async (clanId: string): Promise<ClanPreferences> => {
  const clanPreferences = await appwriteNodeTeams.getPrefs(clanId)
  return clanPreferences
}

export const createClan = async (name: string, id?: string, roles?: string[]): Promise<ClanWithPreferences> => {
  const clan = await appwriteNodeTeams.create(id ?? ID.unique(), name, roles)
  return clan
}

export const inviteClanMember = async (clanId: string, roles: string[], email?: string, userId?: string): Promise<ClanMember> => {
  const clanMember = await appwriteNodeTeams.createMembership(clanId, roles, email, userId)
  return clanMember
}

export const updateClanName = async (clanId: string, name: string): Promise<ClanWithPreferences> => {
  const clan = await appwriteNodeTeams.updateName(clanId, name)
  return clan
}

export const updateClanMember = async (clanId: string, memberId: string, roles: string[]): Promise<ClanMember> => {
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
