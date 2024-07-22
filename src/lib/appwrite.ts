import { Account, Client, Storage, Teams } from 'appwrite'
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from './env'

const appwriteClient = new Client()

appwriteClient
  .setEndpoint(APPWRITE_ENDPOINT())
  .setProject(APPWRITE_PROJECT_ID())

const appwriteAccount = new Account(appwriteClient)

const appwriteTeams = new Teams(appwriteClient)

const appwriteStorage = new Storage(appwriteClient)

export default appwriteClient

export { appwriteAccount, appwriteStorage, appwriteTeams }
export { ID, Permission, Role } from 'appwrite'
