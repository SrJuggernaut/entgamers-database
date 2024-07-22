/* Required Environment Variables, will throw an error if not defined */

export const APPWRITE_ENDPOINT = (): string => {
  if (process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT !== undefined) {
    return process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT
  }
  throw new Error('APPWRITE_ENDPOINT is not defined')
}

export const APPWRITE_PROJECT_ID = (): string => {
  if (process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID !== undefined) {
    return process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
  }
  throw new Error('APPWRITE_PROJECT_ID is not defined')
}

export const APPWRITE_API_KEY = (): string => {
  if (process.env.APPWRITE_API_KEY !== undefined) {
    return process.env.APPWRITE_API_KEY
  }
  throw new Error('APPWRITE_API_KEY is not defined')
}

/* Optional Environment Variables */

/* Constants */

// Team IDs
export const ADMIN_CLAN_ID = 'Admin'
export const MODERATOR_CLAN_ID = 'Moderator'
export const COLLABORATOR_CLAN_ID = 'Collaborator'

// Bucket IDs
export const PROFILE_PICTURE_BUCKET_ID = 'profile-pictures'
