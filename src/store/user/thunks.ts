import axios from 'axios'
import { AnyAction } from 'redux'
import { RootState } from '../../store'
import { ThunkAction } from 'redux-thunk'
import { userResponsableFetched, usersFetched, userAssignedFetched, userByIdFetched } from './slice'



const apiUrl = 'http://localhost:4000'

export const fetchUser = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {

    try {
        const response = await axios.get(`${apiUrl}/users`)
        dispatch(usersFetched(response.data))
    } catch (error) {
        console.log(error)
    }
}

export const fetchUserResponsableById = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await axios.get(`${apiUrl}/users/${id}`)
    dispatch(userResponsableFetched(response.data))
}

export const fetchUserAssignedById = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await axios.get(`${apiUrl}/users/${id}`)
    dispatch(userAssignedFetched(response.data))
}

export const fetchUserById = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await axios.get(`${apiUrl}/users/${id}`)
    dispatch(userByIdFetched(response.data))
}