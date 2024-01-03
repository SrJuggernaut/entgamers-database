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
