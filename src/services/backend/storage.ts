import { ID, type Models } from 'node-appwrite'
import { appwriteNodeStorage } from '../../lib/appriteNode'

export type BucketCompression = 'none' | 'gzip' | 'zstd'
export type fileGravity = 'center' | 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right'
export type fileFormat = 'jpeg' | 'jpg' | 'png' | 'gif' | 'webp'

export const getBuckets = async (): Promise<Models.BucketList> => {
  const buckets = await appwriteNodeStorage.listBuckets()
  return buckets
}

export const getBucket = async (bucketId: string): Promise<Models.Bucket> => {
  const bucket = await appwriteNodeStorage.getBucket(bucketId)
  return bucket
}

export const createBucket = async (name: string, id?: string, permissions?: string[], fileSecurity?: boolean, enabled?: boolean, maximumFileSizeInBytes?: number, allowedFileExtensions?: string[], compression?: BucketCompression, encryption?: boolean, antivirus?: boolean): Promise<Models.Bucket> => {
  const bucketId = id ?? ID.unique()
  const bucketCreated = await appwriteNodeStorage.createBucket(bucketId, name, permissions, fileSecurity, enabled, maximumFileSizeInBytes, allowedFileExtensions, compression, encryption, antivirus)
  return bucketCreated
}

export const updateBucket = async (bucketId: string, name: string, permissions: string[], fileSecurity: boolean, enabled: boolean, maximumFileSizeInBytes: number, allowedFileExtensions: string[], compression: BucketCompression, encryption: boolean, antivirus: boolean): Promise<Models.Bucket> => {
  const bucketUpdated = await appwriteNodeStorage.updateBucket(bucketId, name, permissions, fileSecurity, enabled, maximumFileSizeInBytes, allowedFileExtensions, compression, encryption, antivirus)
  return bucketUpdated
}

export const deleteBucket = async (bucketId: string): Promise<string> => {
  await appwriteNodeStorage.deleteBucket(bucketId)
  return bucketId
}

export const getFiles = async (bucketId: string): Promise<Models.FileList> => {
  const files = await appwriteNodeStorage.listFiles(bucketId)
  return files
}

export const getFile = async (bucketId: string, fileId: string): Promise<Models.File> => {
  const file = await appwriteNodeStorage.getFile(bucketId, fileId)
  return file
}

export const createFile = async (bucketId: string, binaryFile: string, permissions: string[]): Promise<Models.File> => {
  const fileCreated = await appwriteNodeStorage.createFile(bucketId, ID.unique(), binaryFile, permissions)
  return fileCreated
}

export const updateFile = async (bucketId: string, fileId: string, name: string, permissions: string[]): Promise<Models.File> => {
  const fileUpdated = await appwriteNodeStorage.updateFile(bucketId, fileId, name, permissions)
  return fileUpdated
}

export const deleteFile = async (bucketId: string, fileId: string): Promise<string> => {
  await appwriteNodeStorage.deleteFile(bucketId, fileId)
  return fileId
}

export const getFileDownload = async (bucketId: string, fileId: string): Promise<Buffer> => {
  const fileDownload = await appwriteNodeStorage.getFileDownload(bucketId, fileId)
  return fileDownload
}

export const getFilePreview = async (bucketId: string, fileId: string, width?: number, height?: number, gravity?: fileGravity, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, backgroundColor?: string, outputFormat?: fileFormat): Promise<Buffer> => {
  const filePreview = await appwriteNodeStorage.getFilePreview(bucketId, fileId, width, height, gravity, quality, borderWidth, borderColor, borderRadius, opacity, rotation, backgroundColor, outputFormat)
  return filePreview
}

export const getFileView = async (bucketId: string, fileId: string): Promise<Buffer> => {
  const fileView = await appwriteNodeStorage.getFileView(bucketId, fileId)
  return fileView
}
