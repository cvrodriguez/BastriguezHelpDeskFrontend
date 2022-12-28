import axios from 'axios'
import { AnyAction } from 'redux'
import { RootState } from '../../store'
import { ThunkAction } from 'redux-thunk'
import { usersFetched } from './slice'



const apiUrl = 'http://localhost:4000'

export const fetchUser = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {

    try {
        const response = await axios.get(`${apiUrl}/users`)
        dispatch(usersFetched(response.data))
    } catch (error) {
        console.log(error)
    }
}