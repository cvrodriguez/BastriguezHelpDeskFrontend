import type { RootState } from '../../store'
import moment from 'moment';


export const selectTickets = (state: RootState) => state.tickets.ticketList
export const selectTicketById = (state: RootState) => state.tickets.ticketDetail
export const selectTotalTickets = (state: RootState) => state.tickets.ticketList.length
export const selectTotalTicketsOpened = (state: RootState) => state.tickets.ticketList.filter((t)=> t.state === 'Open')
export const selectSevenDaysAgoTickets = (state: RootState) => {
   return state.tickets.ticketList.filter((t) =>  moment(t.createdAt).diff(moment().startOf('week'), 'days')>= 1) 
    
}
export const selectFilterTicketsList = (state: RootState) => state.tickets.TicketsFilterList

 