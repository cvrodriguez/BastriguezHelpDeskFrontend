import * as React from "react";
import { useEffect } from 'react'
import { Outlet, Route, Routes } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import StatisticsComponent from "../components/StatisticsComponent";
import { useAppSelector, useAppDispatch } from '../hooks'
import { selectTickets } from '../store/ticket/slectors'
import { fetchTickets } from '../store/ticket/thunks'


const HomePage: React.FC<{}> = () => {

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

export default HomePage;