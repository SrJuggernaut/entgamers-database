import { Client, Storage, Teams, Users } from 'node-appwrite'
import { APPWRITE_API_KEY, APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from './dotenv'

const appwriteNodeClient = new Client()

appwriteNodeClient
  .setEndpoint(APPWRITE_ENDPOINT())
  .setProject(APPWRITE_PROJECT_ID())
  .setKey(APPWRITE_API_KEY())

const appwriteNodeUsers = new Users(appwriteNodeClient)

const appwriteNodeTeams = new Teams(appwriteNodeClient)

const appwriteNodeStorage = new Storage(appwriteNodeClient)

export default appwriteNodeClient

export { appwriteNodeStorage, appwriteNodeTeams, appwriteNodeUsers }
