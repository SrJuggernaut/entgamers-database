import { Permission, Role, type Models } from 'appwrite'
import { createFile, deleteFile, getFile, getFileDownload, getFileView, getFiles } from '../storage'

export const PROFILE_PICTURE_BUCKET_ID = 'profile-pictures'

export const getProfilePictures = async (): Promise<Models.FileList> => {
  const files = await getFiles(PROFILE_PICTURE_BUCKET_ID)
  return files
}

export const getProfilePicture = async (fileId: string): Promise<Models.File> => {
  const fileView = await getFile(PROFILE_PICTURE_BUCKET_ID, fileId)
  return fileView
}

export const createProfilePicture = async (file: File, userId: string): Promise<Models.File> => {
  const permissions = [
    Permission.read(Role.any()),
    Permission.update(Role.user(userId)),
    Permission.delete(Role.user(userId))
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
