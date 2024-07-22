import { Permission, Role } from '../../lib/appwrite'
import { createFile, deleteFile, getFile, getFileDownload, getFileView, getFiles } from '../storage'
import { ADMIN_CLAN_ID, MODERATOR_CLAN_ID, PROFILE_PICTURE_BUCKET_ID } from '../../lib/env'
import { StorageFile, StorageFileList } from '../../types/storage'

export const getProfilePictures = async (): Promise<StorageFileList> => {
  const files = await getFiles(PROFILE_PICTURE_BUCKET_ID)
  return files
}

export const getProfilePicture = async (fileId: string): Promise<StorageFile> => {
  const fileView = await getFile(PROFILE_PICTURE_BUCKET_ID, fileId)
  return fileView
}

export const createProfilePicture = async (file: File, userId: string): Promise<StorageFile> => {
  const permissions = [
    Permission.read(Role.any()),
    Permission.update(Role.user(userId)),
    Permission.delete(Role.user(userId)),
    Permission.delete(Role.team(ADMIN_CLAN_ID)),
    Permission.delete(Role.team(MODERATOR_CLAN_ID))
  ]
  const fileCreated = await createFile(PROFILE_PICTURE_BUCKET_ID, file, permissions)
  return fileCreated
}

export const deleteProfilePicture = async (fileId: string): Promise<string> => {
  await deleteFile(PROFILE_PICTURE_BUCKET_ID, fileId)
  return fileId
}

export const getProfilePictureView = (fileId: string): URL => {
  const fileView = getFileView(PROFILE_PICTURE_BUCKET_ID, fileId)
  return fileView
}

export const getProfilePicturePreview = (fileId: string): URL => {
  const fileDownload = getFileView(PROFILE_PICTURE_BUCKET_ID, fileId)
  return fileDownload
}

export const getProfilePictureDownload = (fileId: string): URL => {
  const fileDownload = getFileDownload(PROFILE_PICTURE_BUCKET_ID, fileId)
  return fileDownload
}
