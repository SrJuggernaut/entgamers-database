import { appwriteAccount, ID } from '../lib/appwrite'
import type { userSession, User, UserPreferences } from '../types/user'

export const login = async (email: string, password: string): Promise<userSession> => {
  const response = await appwriteAccount.createEmailPasswordSession(email, password)
  return response
}

export const logout = async (sessionId: string): Promise<void> => {
  await appwriteAccount.deleteSession(sessionId)
}

export const register = async (email: string, password: string, name?: string): Promise<User> => {
  const newAccount = await appwriteAccount.create<UserPreferences>(ID.unique(), email, password, name)
  return newAccount
}

export const updateEmail = async (email: string, password: string): Promise<User> => {
  const updatedAccount = await appwriteAccount.updateEmail(email, password)
  return updatedAccount
}

export const updateName = async (name: string): Promise<User> => {
  const updatedAccount = await appwriteAccount.updateName(name)
  return updatedAccount
}

export const updatePassword = async (password: string, oldPassword: string): Promise<User> => {
  const updatedAccount = await appwriteAccount.updatePassword(password, oldPassword)
  return updatedAccount
}

export const getPreferences = async (): Promise<UserPreferences> => {
  const preferences = await appwriteAccount.getPrefs()
  return preferences
}

export const getCurrentUser = async (): Promise<User> => {
  const user = await appwriteAccount.get()
  return user
}

export const updatePreferences = async (preferences: UserPreferences): Promise<User> => {
  const updatedPreferences = await appwriteAccount.updatePrefs<UserPreferences>(preferences)
  return updatedPreferences
}

export const createPasswordRecovery = async (email: string, url: string): Promise<void> => {
  await appwriteAccount.createRecovery(email, url)
}

export const updatePasswordRecovery = async (userId: string, secret: string, password: string): Promise<void> => {
  await appwriteAccount.updateRecovery(userId, secret, password)
}

export const createVerification = async (url: string): Promise<void> => {
  await appwriteAccount.createVerification(url)
}

export const updateVerification = async (userId: string, secret: string): Promise<void> => {
  await appwriteAccount.updateVerification(userId, secret)
}

export const getSession = async (sessionId: string | 'current'): Promise<userSession> => {
  const session = await appwriteAccount.getSession(sessionId)
  return session
}

export type { UserPreferences, User, userSession }
