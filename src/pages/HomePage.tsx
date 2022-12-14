import * as React from "react";
import  { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import {ticketsFetched} from '../store/ticket/slice'

const  HomePage: React.FC  <{}> = () =>{

    const ticket = useAppSelector(state => state.tickets)
    console.log(ticket, 'soy lindo')
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(ticketsFetched())
    },[])

    

    
        return (
            <div>
                <h1>Home Page {ticket.subject}</h1>
                
            </div>
        )
    
}

export default HomePage;