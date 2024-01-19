export interface SocialLink {
  label: string
  url: string
}

export interface UserPreferences {
  profilePicture?: string
  bio?: string
  socialLinks?: SocialLink[]
}
