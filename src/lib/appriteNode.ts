import { Client, Databases, Storage, Teams, Users } from 'node-appwrite'
import { APPWRITE_API_KEY, APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from './env'

const appwriteNodeClient = new Client()

appwriteNodeClient
  .setEndpoint(APPWRITE_ENDPOINT())
  .setProject(APPWRITE_PROJECT_ID())
  .setKey(APPWRITE_API_KEY())

const appwriteNodeUsers = new Users(appwriteNodeClient)

const appwriteNodeDatabases = new Databases(appwriteNodeClient)

const appwriteNodeTeams = new Teams(appwriteNodeClient)

const appwriteNodeStorage = new Storage(appwriteNodeClient)

export default appwriteNodeClient

export { appwriteNodeDatabases, appwriteNodeStorage, appwriteNodeTeams, appwriteNodeUsers }

export { ID, Permission, Role } from 'node-appwrite'
