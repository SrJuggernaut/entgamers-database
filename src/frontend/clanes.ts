import { type Models } from 'appwrite'
import { appwriteTeams } from '../lib/appwrite'
import { type ClanPreferences } from '../types/clanes'

export { type ClanPreferences }
export type ClanWithPreferences = Models.Team<ClanPreferences>
export type ClanList = Models.TeamList<ClanPreferences>
export type ClanMember = Models.Membership
export type ClanMemberList = Models.MembershipList

export const getClanes = async (): Promise<Models.TeamList<ClanPreferences>> => {
  const clanes = await appwriteTeams.list()
  return clanes
}

export const getClan = async (clanId: string): Promise<ClanWithPreferences> => {
  const clan = await appwriteTeams.get(clanId)
  return clan
}

export const getClanMembers = async (clanId: string): Promise<ClanMemberList> => {
  const clanMembers = await appwriteTeams.listMemberships(clanId)
  return clanMembers
}

export const getClanMember = async (clanId: string, memberId: string): Promise<ClanMember> => {
  const clanMember = await appwriteTeams.getMembership(clanId, memberId)
  return clanMember
}

export const getClanPreferences = async (clanId: string): Promise<ClanPreferences> => {
  const clanPreferences = await appwriteTeams.getPrefs(clanId)
  return clanPreferences
}

export const updateClanName = async (clanId: string, name: string): Promise<ClanWithPreferences> => {
  const clan = await appwriteTeams.updateName(clanId, name)
  return clan
}

export const updateClanMember = async (clanId: string, memberId: string, roles: string[]): Promise<ClanMember> => {
  const clanMember = await appwriteTeams.updateMembership(clanId, memberId, roles)
  return clanMember
}

export const updateClanPreferences = async (clanId: string, preferences: ClanPreferences): Promise<ClanPreferences> => {
  const clanPreferences = await appwriteTeams.updatePrefs(clanId, preferences)
  return clanPreferences
}
