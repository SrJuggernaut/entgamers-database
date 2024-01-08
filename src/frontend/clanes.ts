import { type Models } from 'appwrite'
import { appwriteTeams } from '../lib/appwrite'

export type ClanPreferences = Record<string, any>

export const getClanes = async (): Promise<Models.TeamList<ClanPreferences>> => {
  const clanes = await appwriteTeams.list()
  return clanes
}

export const getClan = async (clanId: string): Promise<Models.Team<ClanPreferences>> => {
  const clan = await appwriteTeams.get(clanId)
  return clan
}

export const getClanMembers = async (clanId: string): Promise<Models.MembershipList> => {
  const clanMembers = await appwriteTeams.listMemberships(clanId)
  return clanMembers
}

export const getClanMember = async (clanId: string, memberId: string): Promise<Models.Membership> => {
  const clanMember = await appwriteTeams.getMembership(clanId, memberId)
  return clanMember
}

export const getClanPreferences = async (clanId: string): Promise<ClanPreferences> => {
  const clanPreferences = await appwriteTeams.getPrefs(clanId)
  return clanPreferences
}

export const updateClanName = async (clanId: string, name: string): Promise<Models.Team<ClanPreferences>> => {
  const clan = await appwriteTeams.updateName(clanId, name)
  return clan
}

export const updateClanMember = async (clanId: string, memberId: string, roles: string[]): Promise<Models.Membership> => {
  const clanMember = await appwriteTeams.updateMembership(clanId, memberId, roles)
  return clanMember
}

export const updateClanPreferences = async (clanId: string, preferences: ClanPreferences): Promise<ClanPreferences> => {
  const clanPreferences = await appwriteTeams.updatePrefs(clanId, preferences)
  return clanPreferences
}
