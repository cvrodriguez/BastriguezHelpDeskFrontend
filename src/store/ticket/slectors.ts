import type { RootState } from '../../store'
export const selectTickets = (state: RootState) => state.tickets.ticketList
export const selectTicketById = (state: RootState) => state.tickets.ticketDetail
export const selectTotalTickets = (state: RootState) => state.tickets.ticketList.length
export const selectTotalTicketsOpened = (state: RootState) => state.tickets.ticketList.filter((t)=> t.state === 'Open')
