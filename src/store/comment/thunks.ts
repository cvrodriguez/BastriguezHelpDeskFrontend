import axios from 'axios'
import { AnyAction } from 'redux'
import { RootState } from '../../store'
import { ThunkAction } from 'redux-thunk'
import {fetchTicketById} from '../../store/ticket/thunks'

const apiUrl = 'http://localhost:4000'

export const createComment = (id:number, comment:string, userId:string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch =>{
    const response = await axios.post(`${apiUrl}/tickets/${id}/comments`,{comment,userId})
    dispatch(fetchTicketById(id))
    
}