import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type } from 'os'




type Ticket = {
    subject: string,
    description: string,
    closedAt: Date | null,
    assignedTo: number,
    reportedBy: number,
    state: string,
    severity: string,
}

interface TicketsState {
    ticketList: Ticket[]
}



const initialState: TicketsState = {
    ticketList: []
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers:{

        ticketsFetched: (state, action) =>{
            
            state.ticketList = action.payload
            
        }

    }
})

export const {ticketsFetched} = ticketSlice.actions
export default ticketSlice.reducer