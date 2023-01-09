import axios from 'axios'
import { AnyAction } from 'redux'
import { RootState } from '../../store'
import { ThunkAction } from 'redux-thunk'
import { ticketsFetched, ticketByIdFetched, filteringTicketsList } from '../ticket/slice'

const apiUrl = process.env.REACT_APP_API_ENV

export const fetchTickets = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  const response = await axios.get(`${apiUrl}/tickets`)
  dispatch(ticketsFetched(response.data))
}

export const fetchTicketById = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  const response = await axios.get(`${apiUrl}/tickets/${id}`)
  dispatch(ticketByIdFetched(response.data))

}

export const UpdateTicketById = (id: number,assignedTo:string,reportedBy:string, subject: string, severity: string, state: string, description: string): 
ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
   await axios.patch(`${apiUrl}/tickets/${id}`, { subject, severity, state, description, assignedTo,reportedBy })
}

export const createTicket = (assignedTo: string, reportedBy: string, subject: string, severity: string, state: string, description: string):
 ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
   await axios.post(`${apiUrl}/tickets`, { assignedTo, reportedBy, subject, severity, state, description })
}

export const FetchTicketsByFilters = (severity: string, state: string):
 ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  const response =  await axios.get(`${apiUrl}/tickets/filters`,{params: {severity, state }})
   dispatch(filteringTicketsList(response.data))
}
