import { appwriteNodeDatabases } from '../lib/appriteNode'

export const ensureDatabase = (databaseID: string, databaseName: string) => {
  let databaseExists = false
  return (async () => {
    if (databaseExists) return
    try {
      await appwriteNodeDatabases.get(databaseID)
    } catch (error) {
      await appwriteNodeDatabases.create(databaseID, databaseName, true)
    } finally {
      databaseExists = true
    }
  })()
}
