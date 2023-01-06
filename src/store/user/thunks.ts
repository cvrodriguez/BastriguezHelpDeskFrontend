import axios from 'axios'
import { AnyAction } from 'redux'
import { RootState } from '../../store'
import { ThunkAction } from 'redux-thunk'
import { userReporterByFetched, usersFetched, userAssignedFetched, userByIdFetched } from './slice'

const apiUrl = 'http://localhost:4000'

export const fetchUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    try {
        const response = await axios.get(`${apiUrl}/users`)
        dispatch(usersFetched(response.data))
    } catch (error) {
        console.log(error)
    }
}

export const fetchUserReporterById = (id: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await axios.get(`${apiUrl}/users/${id}`)
    dispatch(userReporterByFetched(response.data))
}

export const fetchUserAssignedToById = (id: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await axios.get(`${apiUrl}/users/${id}`)
    dispatch(userAssignedFetched(response.data))
}

export const fetchUserById = (id: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await axios.get(`${apiUrl}/users/${id}`)
    dispatch(userByIdFetched(response.data))
}

export const CreateUser = (email: string, password: string, name: string, given_name: string, family_name: string, nickname: string, picture: string,):
    ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
        try {
            await axios.post(`${apiUrl}/users`, { email, password, name, given_name, family_name, nickname, picture })

        } catch (error) {
            console.log(error)
        }
    }

