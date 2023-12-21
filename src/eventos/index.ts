import prismaClient from '../bin/prismaClient'
import { type Evento, type Prisma } from '@prisma/client'

export const getEvento = async (eventoFindUniqueArgs: Prisma.EventoFindUniqueArgs): Promise<Evento> => {
  const evento = await prismaClient.evento.findUnique(eventoFindUniqueArgs)

  if (evento === null) {
    throw new Error('Evento not found')
  }

  return evento
}

export const getEventos = async (eventoFindManyArgs: Prisma.EventoFindManyArgs): Promise<Evento[]> => {
  return await prismaClient.evento.findMany(eventoFindManyArgs)
}

export const createEvento = async (eventoCreateArgs: Prisma.EventoCreateArgs): Promise<Evento> => {
  return await prismaClient.evento.create(eventoCreateArgs)
}

export const updateEvento = async (eventoUpdateArgs: Prisma.EventoUpdateArgs): Promise<Evento> => {
  return await prismaClient.evento.update(eventoUpdateArgs)
}

export const deleteEvento = async (eventoDeleteArgs: Prisma.EventoDeleteArgs): Promise<Evento> => {
  return await prismaClient.evento.delete(eventoDeleteArgs)
}
