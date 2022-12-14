import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'



interface TicketState {
    subject: string,
    description: string,
    closedAt: Date | null,
    assignedTo: number,
    reportedBy: number,
    state: string,
    severity: string,
}

const initialState: TicketState = {
    subject: "",
    description: "",
    closedAt: null,
    assignedTo: 0,
    reportedBy: 0,
    state: "",
    severity: "",
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers:{

        ticketsFetched: state =>{
            state.subject = "hola"

        }

    }
})

export const {ticketsFetched} = ticketSlice.actions
export const selectTicket = (state: RootState) => state.tickets

export default ticketSlice.reducer