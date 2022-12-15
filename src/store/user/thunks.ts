import axios from 'axios'
import { AnyAction } from 'redux'
import { RootState } from '../../store'
import { ThunkAction } from 'redux-thunk'
import {loginSuccess} from './slice'


const apiUrl = 'http://localhost:4000'

export const fetchUser = (email: string, password: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {

    try {
        
        const response = await axios.post(`${apiUrl}/users/login`, { email, password })
        dispatch(

            loginSuccess({ token: response.data.token, user: response.data.user })
          );
    } catch (error) {
        console.log(error)
    }
}