import { Models } from 'appwrite'
import { Models as BackendModels } from 'node-appwrite'

export type Bucket = BackendModels.Bucket
export type BucketList = BackendModels.BucketList

export type StorageFileList = Models.FileList
export type StorageFile = Models.File

export { ImageFormat, ImageGravity } from 'appwrite'
export { Compression } from 'node-appwrite'
