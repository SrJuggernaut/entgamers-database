import { ID, type Models } from 'appwrite'
import { appwriteAccount } from '../../lib/appwrite'

export type AccountPreferences = Record<string, any>

export const login = async (email: string, password: string): Promise<Models.Session> => {
  const response = await appwriteAccount.createEmailSession(email, password)
  return response
}

export const logout = async (sessionId: string): Promise<void> => {
  await appwriteAccount.deleteSession(sessionId)
}

export const register = async (email: string, password: string, name?: string): Promise<Models.User<AccountPreferences>> => {
  const newAccount = await appwriteAccount.create<AccountPreferences>(ID.unique(), email, password, name)
  return newAccount
}

export const updateEmail = async (email: string, password: string): Promise<Models.User<AccountPreferences>> => {
  const updatedAccount = await appwriteAccount.updateEmail(email, password)
  return updatedAccount
}

export const updateName = async (name: string): Promise<Models.User<AccountPreferences>> => {
  const updatedAccount = await appwriteAccount.updateName(name)
  return updatedAccount
}

export const updatePassword = async (password: string, oldPassword: string): Promise<Models.User<AccountPreferences>> => {
  const updatedAccount = await appwriteAccount.updatePassword(password, oldPassword)
  return updatedAccount
}

export const getPreferences = async (): Promise<AccountPreferences> => {
  const preferences = await appwriteAccount.getPrefs()
  return preferences
}

export const updatePreferences = async (preferences: AccountPreferences): Promise<AccountPreferences> => {
  const updatedPreferences = await appwriteAccount.updatePrefs(preferences)
  return updatedPreferences
}

export const createPasswordRecovery = async (email: string, url: string): Promise<void> => {
  await appwriteAccount.createRecovery(email, url)
}

export const updatePasswordRecovery = async (userId: string, secret: string, password: string, passwordAgain: string): Promise<void> => {
  await appwriteAccount.updateRecovery(userId, secret, password, passwordAgain)
}

export const createVerification = async (url: string): Promise<void> => {
  await appwriteAccount.createVerification(url)
}

export const updateVerification = async (userId: string, secret: string): Promise<void> => {
  await appwriteAccount.updateVerification(userId, secret)
}

export const getSession = async (sessionId: string | 'current'): Promise<Models.Session> => {
  const session = await appwriteAccount.getSession(sessionId)
  return session
}
