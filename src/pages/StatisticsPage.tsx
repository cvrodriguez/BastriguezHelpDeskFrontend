import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../hooks'
import { selectSevenDaysAgoTickets, selectTotalTickets, selectTotalTicketsOpened } from "../store/ticket/slectors";
import { fetchTickets } from "../store/ticket/thunks";

import '../style/statictics.css'
import { BsBarChartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdReceipt } from 'react-icons/md';
import { GrLineChart } from "react-icons/gr";

import { PieChartComponent } from '../components/PieChartComponent';
import { LineChartComponent } from '../components';
import { fetchUsers } from '../store/user/thunks';
import { selectUsersList } from '../store/user/selectors';


export const StatisticsComponent: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const totalTickets = useAppSelector(selectTotalTickets)
    const totalTicketsOpen = useAppSelector(selectTotalTicketsOpened)
    const users = useAppSelector(selectUsersList)
    const date = useAppSelector(selectSevenDaysAgoTickets)


    useEffect(() => {
        dispatch(fetchTickets())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div className="statictics-page">

            <div className='first'>

                <div className="total-tickets">
                    <div className='title-total-tickets'>
                        <MdReceipt className='TiTicket' />
                        <h4>Total Tickets</h4>
                    </div>
                    <div className="total-opened-tickets">
                        <span>{totalTicketsOpen.length} Opened</span>
                    </div>
                    <div className="number-of-total-tickets">{totalTickets}</div>
                    
                    <div className="numbers-by-week">
                        <span><BsBarChartFill style={{'color':'white' ,'paddingRight':'5px', 'fontSize':'25px'}} /> {Math.round(date.length * 100 / totalTickets)}%</span>
                        <span> + {date.length} this week</span>
                    </div>
                </div>

                <div className="total-tickets" style={{'backgroundColor':'white'}}>
                    <div className='title-total-tickets'>
                        <FaUserAlt className='TiTicket' />
                        <h4 style={{'color':'#133340'}}>Total User</h4>
                    </div>

                    <div className="number-of-total-tickets">{users.length}</div>
                    
                    <div className="numbers-by-week">
                        <span><GrLineChart style={{'color':'red' ,'paddingRight':'5px', 'fontSize':'25px'}}/>%</span>
                        <span> + {} this week</span>
                    </div>

                </div>
            </div>
            


            <div className='graph'>
                <LineChartComponent />

                <PieChartComponent />
            </div>




        </div >
    )
}
