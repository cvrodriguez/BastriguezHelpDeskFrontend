import axios from 'axios'
import { AnyAction } from 'redux'
import { RootState } from '../../store'
import { ThunkAction } from 'redux-thunk'
import {ticketsFetched} from '../ticket/slice'


const apiUrl = 'http://localhost:4000'


export const fetchTickets = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch =>{
    const response = await axios.get(`${apiUrl}/tickets`)
    
    dispatch(ticketsFetched(response.data))

}