import { createSlice } from '@reduxjs/toolkit'

type Ticket = {
    id: number,
    subject: string,
    description: string,
    closedAt: Date | null,
    assignedTo: string,
    reportedBy: string,
    state: string,
    severity: string,
    assigned:User,
    reporter:User,
    comments: Comment[] | null,
    createdAt: Date | null
}

type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    state: string,
}
type Comment = {
    id:number,
    comment: string,
    createdAt: Date,
    updatedAt:Date
}

interface TicketsState {
    ticketList: Ticket[],
    ticketDetail: Ticket | null,
   TicketsFilterList: Ticket[]
}

const initialState: TicketsState = {
    ticketList: [],
    ticketDetail: null,
    TicketsFilterList:[]
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {

        ticketsFetched: (state, action) => {
            state.ticketList = action.payload
        },
        ticketByIdFetched: (state, action) => {
            state.ticketDetail = action.payload
        },
        filteringTicketsList:(state, action)=>{
            state.TicketsFilterList= action.payload
        }

    }
})

export const { ticketsFetched, ticketByIdFetched,filteringTicketsList } = ticketSlice.actions
export default ticketSlice.reducer