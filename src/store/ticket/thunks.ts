import axios from 'axios'
import { AnyAction } from 'redux'
import { RootState } from '../../store'
import { ThunkAction } from 'redux-thunk'
import { ticketsFetched, ticketByIdFetched } from '../ticket/slice'

const apiUrl = 'http://localhost:4000'


export const fetchTickets = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  const response = await axios.get(`${apiUrl}/tickets`)
  dispatch(ticketsFetched(response.data))
}

export const fetchTicketById = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  const response = await axios.get(`${apiUrl}/tickets/${id}`)
  dispatch(ticketByIdFetched(response.data))

}

export const UpdateTicketById = (id: number, subject: string, severity: string, state: string, description: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  const response = await axios.patch(`${apiUrl}/tickets/${id}`, { subject, severity, state, description })
}

export const createTicket = (assignedTo: number, reportedBy: number, subject: string, severity: string, state: string, description: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  const response = await axios.post(`${apiUrl}/tickets`, { assignedTo, reportedBy, subject, severity, state, description })
}


