import { Account, Client, Databases, Storage, Teams } from 'appwrite'
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from './env'

const appwriteClient = new Client()

appwriteClient
  .setEndpoint(APPWRITE_ENDPOINT())
  .setProject(APPWRITE_PROJECT_ID())

const appwriteAccount = new Account(appwriteClient)

const appwriteTeams = new Teams(appwriteClient)

const appwriteDatabases = new Databases(appwriteClient)

const appwriteStorage = new Storage(appwriteClient)

export default appwriteClient

export { ID, Permission, Query, Role, type QueryTypes } from 'appwrite'
export { appwriteAccount, appwriteDatabases, appwriteStorage, appwriteTeams }
