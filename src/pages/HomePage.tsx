import * as React from "react";
import { useEffect } from 'react'
import { Outlet} from "react-router-dom";
import {NavBarComponent} from "../components";
import { useAppSelector, useAppDispatch } from '../hooks'
import { selectTickets } from '../store/ticket/slectors'
import { fetchTickets } from '../store/ticket/thunks'


export const HomePage: React.FC<{}> = () => {

    const tickets = useAppSelector(selectTickets)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTickets())
    }, [])




    return (
        <div>
            <NavBarComponent></NavBarComponent>
            <Outlet/>


        </div>
    )


}

