import { ADMIN_CLAN_ID, COLLABORATOR_CLAN_ID, MODERATOR_CLAN_ID } from '../../lib/env'
import { createClan, getClan } from '../clanes'

export const ensureAdminClan = (() => {
  let adminClanExists = false
  return async () => {
    if (adminClanExists) return
    try {
      await getClan(ADMIN_CLAN_ID)
    } catch (error) {
      await createClan(ADMIN_CLAN_ID, ADMIN_CLAN_ID)
    } finally {
      adminClanExists = true
    }
  }
})()

export const ensureModeratorClan = (() => {
  let moderatorClanExists = false
  return async () => {
    if (moderatorClanExists) return
    try {
      await getClan(MODERATOR_CLAN_ID)
    } catch (error) {
      await createClan(MODERATOR_CLAN_ID, MODERATOR_CLAN_ID)
    } finally {
      moderatorClanExists = true
    }
  }
})()

export const ensureCollaboratorClan = (() => {
  let collaboratorClanExists = false
  return async () => {
    if (collaboratorClanExists) return
    try {
      await getClan(COLLABORATOR_CLAN_ID)
    } catch (error) {
      await createClan(COLLABORATOR_CLAN_ID, COLLABORATOR_CLAN_ID)
    } finally {
      collaboratorClanExists = true
    }
  }
})()
