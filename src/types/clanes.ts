import { Models } from 'appwrite'

export type Clan = Models.Team<ClanPreferences>
export type ClanList = Models.TeamList<ClanPreferences>
export type ClanMember = Models.Membership
export type ClanMemberList = Models.MembershipList

export interface ClanPreferences {
  picture?: string
  description?: string
}
