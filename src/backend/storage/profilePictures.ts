import { Permission, Role } from 'node-appwrite'
import { ADMIN_CLAN_ID, MODERATOR_CLAN_ID } from '../clanes/administrative'
import { createBucket, getBucket } from '../storage'

export const PROFILE_PICTURE_BUCKET_ID = 'profile-pictures'

export const ensureProfilePicturesBucket = (() => {
  let bucketExists = false
  return async () => {
    if (bucketExists) return
    try {
      await getBucket('profile-picture')
    } catch (error) {
      const permissions = [
        Permission.create(Role.any()),
        Permission.delete(Role.team(MODERATOR_CLAN_ID)),
        Permission.delete(Role.team(ADMIN_CLAN_ID))
      ]
      await createBucket(PROFILE_PICTURE_BUCKET_ID, PROFILE_PICTURE_BUCKET_ID, permissions, true, true, 5_000_000, ['png', 'jpg', 'jpeg'], 'none', true, true)
    } finally {
      bucketExists = true
    }
  }
})()
