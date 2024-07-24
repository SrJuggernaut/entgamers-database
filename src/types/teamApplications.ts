import { Models } from 'appwrite'

export enum TeamApplicationStatus {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Rejected = 'Rejected'
}

export enum TeamApplicationRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  Collaborator = 'Collaborator',
  User = 'User'
}

export type TeamApplicationData = {
  name: string
  email: string
  discord: string
  message: string
  role: TeamApplicationRole
  status: TeamApplicationStatus
}

export type TeamApplication = Models.Document & TeamApplicationData

export type TeamApplicationList = Models.DocumentList<TeamApplication>
