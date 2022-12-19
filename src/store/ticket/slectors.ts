import type { RootState } from '../../store'
export const selectTickets = (state: RootState) => state.tickets.ticketList
export const selectTicketById = (state: RootState) => state.tickets.ticketDetail