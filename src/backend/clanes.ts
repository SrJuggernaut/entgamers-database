import { Clan, ClanList, ClanMember, ClanMemberList, type ClanPreferences } from '../frontend/clanes'
import { appwriteNodeTeams, ID } from '../lib/appriteNode'

export const getClanes = async (): Promise<ClanList> => {
  const clanes = await appwriteNodeTeams.list()
  return clanes
}

export const getClan = async (clanId: string): Promise<Clan> => {
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

export const createClan = async (name: string, id?: string, roles?: string[]): Promise<Clan> => {
  const clan = await appwriteNodeTeams.create(id ?? ID.unique(), name, roles)
  return clan
}

export const inviteClanMember = async (clanId: string, roles: string[], email?: string, userId?: string): Promise<ClanMember> => {
  const clanMember = await appwriteNodeTeams.createMembership(clanId, roles, email, userId)
  return clanMember
}

export const updateClanName = async (clanId: string, name: string): Promise<Clan> => {
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

export const deleteClanMember = async (clanId: string, memberId: string): Promise<void> => {
  await appwriteNodeTeams.deleteMembership(clanId, memberId)
}

export { type ClanPreferences }
