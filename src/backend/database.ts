import { appwriteNodeDatabases } from '../lib/appriteNode'
import { ADMINISTRATIVE_DATABASE_ID } from '../lib/env'

export const ensureDatabase = (databaseID: string) => {
  let databaseExists = false
  return (async () => {
    if (databaseExists) return
    try {
      await appwriteNodeDatabases.get(databaseID)
    } catch (error) {
      await appwriteNodeDatabases.create(ADMINISTRATIVE_DATABASE_ID, databaseID, true)
    } finally {
      databaseExists = true
    }
  })()
}
