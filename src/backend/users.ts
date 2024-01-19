import { type Models } from 'node-appwrite'
import { appwriteNodeUsers } from '../lib/appriteNode'
import { type UserPreferences } from '../types/user'

export type UserWithPreferencesList = Models.UserList<UserPreferences>

export const getAllUsers = async (): Promise<UserWithPreferencesList> => {
  const users = await appwriteNodeUsers.list<UserPreferences>()
  return users
}

export const getUser = async (userId: string): Promise<Models.User<UserPreferences>> => {
  const user = await appwriteNodeUsers.get<UserPreferences>(userId)
  return user
}
