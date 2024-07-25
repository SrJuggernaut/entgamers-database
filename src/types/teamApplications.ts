import { Models } from 'appwrite'

export type TeamApplicationStatus = 'Pending' | 'Accepted' | 'Rejected'

export type TeamApplicationRole = 'Admin' | 'Moderator' | 'Collaborator' | 'User'

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
