import type { Models } from 'appwrite'
import type { Models as BackendModels } from 'node-appwrite'

export interface SocialLink {
  label: string
  url: string
}

export interface UserPreferences {
  profilePicture?: string
  bio?: string
  socialLinks?: SocialLink[]
}

export type User = Models.User<UserPreferences>
export type UserList = BackendModels.UserList<UserPreferences>
export type userSession = Models.Session
