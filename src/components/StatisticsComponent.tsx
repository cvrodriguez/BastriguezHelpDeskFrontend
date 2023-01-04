// import * as React from "react";
import React, { PureComponent, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from '../hooks'
import { selectSevenDaysAgoTickets, selectTickets, selectTotalTickets, selectTotalTicketsOpened } from "../store/ticket/slectors";
import { fetchTickets } from "../store/ticket/thunks";

import '../style/statictics.css'
import { VscListOrdered } from "react-icons/vsc";
import { BsBarChartFill } from "react-icons/bs";
import moment from 'moment';
import { groupBy } from 'lodash';
import { type } from 'os';


type Graph = {
    name: string,
    amount: number,
    low:number,
    medio:number,
    high:number
    

}



export const StatisticsComponent: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const tickets = useAppSelector(selectTickets)
    const totalTickets = useAppSelector(selectTotalTickets)
    const totalTicketsOpen = useAppSelector(selectTotalTicketsOpened)
    const date = useAppSelector(selectSevenDaysAgoTickets)
    const [chartArrayByDay, setChartArrayByDay] = useState([] as Graph[])
   

    const makeGraph = () => {
        if (tickets.length === 0) return
        const ticketsByDay = groupBy(tickets, (t) => {

            if (moment(t.createdAt).day() === 1) return 'Monday';
            if (moment(t.createdAt).day() === 2) return 'Tuesday';
            if (moment(t.createdAt).day() === 3) return 'Wednesday';
            if (moment(t.createdAt).day() === 4) return 'Thursday';
            if (moment(t.createdAt).day() === 5) return 'Friday';
            if (moment(t.createdAt).day() === 6) return 'Saturday';
            if (moment(t.createdAt).day() === 0) return 'Sunday';
           
        });

        const tuesday = groupBy(ticketsByDay['Monday'], (m)=>{
            if(m.severity === 'Low') return 'Low'
            if(m.severity === 'Medio') return 'Medio'
            if(m.severity === 'High') return 'High'
        })

        const monday = groupBy(ticketsByDay['Tuesday'], (m)=>{
            if(m.severity === 'Low') return 'Low'
            if(m.severity === 'Medio') return 'Medio'
            if(m.severity === 'High') return 'High'
        })
        
        const wednesday = groupBy(ticketsByDay['Wednesday'], (m)=>{
            if(m.severity === 'Low') return 'Low'
            if(m.severity === 'Medio') return 'Medio'
            if(m.severity === 'High') return 'High'
        })
        const thursday = groupBy(ticketsByDay['Thursday'], (m)=>{
            if(m.severity === 'Low') return 'Low'
            if(m.severity === 'Medio') return 'Medio'
            if(m.severity === 'High') return 'High'
        })
      
        const friday = groupBy(ticketsByDay['Friday'], (m)=>{
            if(m.severity === 'Low') return 'Low'
            if(m.severity === 'Medio') return 'Medio'
            if(m.severity === 'High') return 'High'
        })
        const saturday = groupBy(ticketsByDay['Saturday'], (m)=>{
            if(m.severity === 'Low') return 'Low'
            if(m.severity === 'Medio') return 'Medio'
            if(m.severity === 'High') return 'High'
        })
        console.log(saturday, 'mondy')
        const sunday = groupBy(ticketsByDay['Sunday'], (m)=>{
            if(m.severity === 'Low') return 'Low'
            if(m.severity === 'Medio') return 'Medio'
            if(m.severity === 'High') return 'High'
        })

        setChartArrayByDay([
            {
                name: 'Mon',
                amount: ticketsByDay['Monday'].length,
                low: monday['Low']? monday['Low'].length : 0,
                medio: monday['Medio']? monday['Medio'].length : 0,
                high: monday['High']? monday['High'].length : 0
                
            },
            {
                name: 'Tue',
                amount: ticketsByDay['Tuesday']?ticketsByDay['Tuesday'].length:0,
                low: tuesday['Low']?tuesday['Low'].length:0,
                medio:tuesday['Medio']? tuesday['Medio'].length:0,
                high:tuesday['High']? tuesday['High'].length:0
            },
            {
                name: 'Wed',
                amount: ticketsByDay['Wednesday'].length,
                low: wednesday['Low']?wednesday['Low'].length:0,
                medio: wednesday['Medio']?wednesday['Medio'].length:0,
                high:wednesday['High']?wednesday['High'].length:0
            },
            {
                name: 'Thu',
                amount: ticketsByDay['Thursday'].length,
                low: thursday['Low'] ? thursday['Low'].length :0,
                medio: thursday['Medio'] ?  thursday['Medio'].length :0,
                high: thursday['High'] ?  thursday['High'].length :0
            },
            {
                name: 'Fri',
                amount: ticketsByDay['Friday'].length,
                low: friday['Low']? friday['Low'].length :0,
                medio:friday['Medio']? friday['Medio'].length :0,
                high:friday['High']? friday['High'].length :0
            },
            {
                name: 'Sat',
                amount: ticketsByDay['Saturday'].length,
                low: saturday['Low'] ? saturday['Low'].length :0,
                medio: saturday['Medio'] ? saturday['Medio'].length :0,
                high: saturday['High'] ? saturday['High'].length :0
            },
            {
                name: 'Sun',
                amount: ticketsByDay['Sunday'].length,
                low: sunday['Low'] ? sunday['Low'].length :0,
                medio: sunday['Medio'] ?  sunday['Medio'].length :0,
                high: sunday['High'] ?  sunday['High'].length :0
            }
        ])}


    useEffect(() => {
        dispatch(fetchTickets())
    }, [])

    useEffect(() => {
        makeGraph()

    }, [tickets])

    return (
        <div className="statictics-page">

            <div className='first'>
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

                        <span><BsBarChartFill /> {Math.round(date.length * 100 / totalTickets)}%</span>
                        <span> + {date.length} this week</span>
                    </div>

                </div>

                <div className="total-tickets">
                    <div className='title-total-tickets'>
                        <VscListOrdered className='TiTicket' />
                        <h3>Total Tickets</h3>
                    </div>

                    <span>{ } Opened</span>
                    {totalTickets}
                    <span>this week</span>
                </div>
            </div>



            <div>

                <LineChart className='rojo'
                    width={500}
                    height={300}
                    data={chartArrayByDay }
                    margin={{
                        top: 5,
                        right: 30,
                        left: 6,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36}/>
                    <Line type="monotone" dataKey="high" stroke="red" />
                    <Line type="monotone" dataKey="medio" stroke="orange" />
                    <Line type="monotone" dataKey="low" stroke="green"   />
                </LineChart>

            </div>


        </div >
    )
}
