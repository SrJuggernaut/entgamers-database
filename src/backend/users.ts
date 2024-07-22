import { appwriteNodeUsers } from '../lib/appriteNode'
import type { User, UserList, UserPreferences } from '../types/user'

export { type UserPreferences }

export const getAllUsers = async (): Promise<UserList> => {
  const users = await appwriteNodeUsers.list<UserPreferences>()
  return users
}

export const getUser = async (userId: string): Promise<User> => {
  const user = await appwriteNodeUsers.get<UserPreferences>(userId)
  return user
}
