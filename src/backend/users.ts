import { type Models } from 'node-appwrite'
import { appwriteNodeUsers } from '../lib/appriteNode'
import { type UserPreferences } from '../types/user'

export { type UserPreferences }
export type UserWithPreferences = Models.User<UserPreferences>
export type UserList = Models.UserList<UserPreferences>

export const getAllUsers = async (): Promise<UserList> => {
  const users = await appwriteNodeUsers.list<UserPreferences>()
  return users
}

export const getUser = async (userId: string): Promise<UserWithPreferences> => {
  const user = await appwriteNodeUsers.get<UserPreferences>(userId)
  return user
}
