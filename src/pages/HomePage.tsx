import * as React from "react";
import  {  useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import {selectTickets} from '../store/ticket/slectors'
import {fetchTickets} from '../store/ticket/thunks'

const  HomePage: React.FC  <{}> = () =>{

    const tickets = useAppSelector(selectTickets)
   
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchTickets())
    },[])

    

    
        return (
            <div>
                <h1>Home Page {tickets.map((p)=> p.subject)}</h1>
                
            </div>
        )
    
}

export default HomePage;