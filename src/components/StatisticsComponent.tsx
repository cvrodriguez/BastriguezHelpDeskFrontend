import * as React from "react";

import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from '../hooks'
import { selectTotalTickets, selectTotalTicketsOpened } from "../store/ticket/slectors";
import { fetchTickets } from "../store/ticket/thunks";

import '../style/statictics.css'
import { VscListOrdered } from "react-icons/vsc";
import { BsBarChartFill } from "react-icons/bs";

export const StatisticsComponent: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const totalTickets = useAppSelector(selectTotalTickets)
    const totalTicketsOpen = useAppSelector(selectTotalTicketsOpened)

    useEffect(() => {
        dispatch(fetchTickets())
    }, [])

    return (
        <div className="statictics-page">

            <div className="total-tickets">
                <div className='title-total-tickets'>
                    <VscListOrdered className='TiTicket' />
                    <h5>Total Tickets</h5>
                </div>
                <div className="total-opened-tickets">
                    <span>{totalTicketsOpen.length} Opened</span>
                </div>
                <div className="number-of-total-tickets">{totalTickets}</div>
                <div className="numbers-by-week">

                    <span><BsBarChartFill />  this week</span>
                    <span>this week</span>
                </div>

            </div>





            <div className="total-tickets">
                <div className='title-total-tickets'>
                    <VscListOrdered className='TiTicket' />
                    <h3>Total Tickets</h3>
                </div>

                <span>{} Opened</span>
                {totalTickets}
                <span>this week</span>
            </div>

        </div >
    )
}
