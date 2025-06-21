import { create } from '../controllers/tickets/create.js'

export const ticketsRoutes = [
  {
    method: 'POST',
    path: '/tickets',
    controller: create
  }
]