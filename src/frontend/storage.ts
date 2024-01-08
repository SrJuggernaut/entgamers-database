import { ID, type Models } from 'appwrite'
import { appwriteStorage } from '../../lib/appwrite'

export type BucketCompression = 'none' | 'gzip' | 'zstd'
export type fileGravity = 'center' | 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right'
export type fileFormat = 'jpeg' | 'jpg' | 'png' | 'gif' | 'webp'

export const getFiles = async (bucketId: string): Promise<Models.FileList> => {
  const files = await appwriteStorage.listFiles(bucketId)
  return files
}

export const getFile = async (bucketId: string, fileId: string): Promise<Models.File> => {
  const file = await appwriteStorage.getFile(bucketId, fileId)
  return file
}

export const createFile = async (bucketId: string, file: File, permissions: string[]): Promise<Models.File> => {
  const fileCreated = await appwriteStorage.createFile(bucketId, ID.unique(), file, permissions)
  return fileCreated
}

export const updateFile = async (bucketId: string, fileId: string, name: string, permissions: string[]): Promise<Models.File> => {
  const fileUpdated = await appwriteStorage.updateFile(bucketId, fileId, name, permissions)
  return fileUpdated
}

export const deleteFile = async (bucketId: string, fileId: string): Promise<string> => {
  await appwriteStorage.deleteFile(bucketId, fileId)
  return fileId
}

export const getFileDownload = (bucketId: string, fileId: string): URL => {
  const fileDownload = appwriteStorage.getFileDownload(bucketId, fileId)
  return fileDownload
}

export const getFilePreview = (bucketId: string, fileId: string, width?: number, height?: number, gravity?: fileGravity, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, backgroundColor?: string, outputFormat?: fileFormat): URL => {
  const filePreview = appwriteStorage.getFilePreview(bucketId, fileId, width, height, gravity, quality, borderWidth, borderColor, borderRadius, opacity, rotation, backgroundColor, outputFormat)
  return filePreview
}

export const getFileView = (bucketId: string, fileId: string): URL => {
  const fileView = appwriteStorage.getFileView(bucketId, fileId)
  return fileView
}
