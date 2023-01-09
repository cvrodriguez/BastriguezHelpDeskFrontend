import axios from 'axios'
import { AnyAction } from 'redux'
import { RootState } from '../../store'
import { ThunkAction } from 'redux-thunk'
import {fetchTicketById} from '../../store/ticket/thunks'

const apiUrl = process.env.REACT_APP_API_ENV

export const createComment = (id:number, comment:string, userId:string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch =>{
    await axios.post(`${apiUrl}/tickets/${id}/comments`,{comment,userId})
    dispatch(fetchTicketById(id))
    
}