import React, { useEffect, useState } from 'react';

import moment from 'moment';
import { groupBy } from 'lodash';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useAppSelector } from "../hooks";
import { selectTickets } from "../store/ticket/slectors";

import '../style/lineChartPage.css'

export const LineChartComponent: React.FC<{}> = () => {

    const tickets = useAppSelector(selectTickets)
    const [chartArrayByDay, setChartArrayByDay] = useState([] as Graph[])

    type Graph = {
        name: string,
        amount: number,
        low: number,
        medio: number,
        high: number
    }

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
        const tuesday = groupBy(ticketsByDay['Monday'], (m) => {
            if (m.severity === 'Low') return 'Low'
            if (m.severity === 'Medio') return 'Medio'
            if (m.severity === 'High') return 'High'
        })

        const monday = groupBy(ticketsByDay['Tuesday'], (m) => {
            if (m.severity === 'Low') return 'Low'
            if (m.severity === 'Medio') return 'Medio'
            if (m.severity === 'High') return 'High'
        })

        const wednesday = groupBy(ticketsByDay['Wednesday'], (m) => {
            if (m.severity === 'Low') return 'Low'
            if (m.severity === 'Medio') return 'Medio'
            if (m.severity === 'High') return 'High'
        })
        const thursday = groupBy(ticketsByDay['Thursday'], (m) => {
            if (m.severity === 'Low') return 'Low'
            if (m.severity === 'Medio') return 'Medio'
            if (m.severity === 'High') return 'High'
        })

        const friday = groupBy(ticketsByDay['Friday'], (m) => {
            if (m.severity === 'Low') return 'Low'
            if (m.severity === 'Medio') return 'Medio'
            if (m.severity === 'High') return 'High'
        })
        const saturday = groupBy(ticketsByDay['Saturday'], (m) => {
            if (m.severity === 'Low') return 'Low'
            if (m.severity === 'Medio') return 'Medio'
            if (m.severity === 'High') return 'High'
        })

        const sunday = groupBy(ticketsByDay['Sunday'], (m) => {
            if (m.severity === 'Low') return 'Low'
            if (m.severity === 'Medio') return 'Medio'
            if (m.severity === 'High') return 'High'
        })

        setChartArrayByDay([
            {
                name: 'Mon',
                amount: ticketsByDay['Monday'].length,
                low: monday['Low'] ? monday['Low'].length : 0,
                medio: monday['Medio'] ? monday['Medio'].length : 0,
                high: monday['High'] ? monday['High'].length : 0

            },
            {
                name: 'Tue',
                amount: ticketsByDay['Tuesday'] ? ticketsByDay['Tuesday'].length : 0,
                low: tuesday['Low'] ? tuesday['Low'].length : 0,
                medio: tuesday['Medio'] ? tuesday['Medio'].length : 0,
                high: tuesday['High'] ? tuesday['High'].length : 0
            },
            {
                name: 'Wed',
                amount: ticketsByDay['Wednesday'].length,
                low: wednesday['Low'] ? wednesday['Low'].length : 0,
                medio: wednesday['Medio'] ? wednesday['Medio'].length : 0,
                high: wednesday['High'] ? wednesday['High'].length : 0
            },
            {
                name: 'Thu',
                amount: ticketsByDay['Thursday'].length,
                low: thursday['Low'] ? thursday['Low'].length : 0,
                medio: thursday['Medio'] ? thursday['Medio'].length : 0,
                high: thursday['High'] ? thursday['High'].length : 0
            },
            {
                name: 'Fri',
                amount: ticketsByDay['Friday'].length,
                low: friday['Low'] ? friday['Low'].length : 0,
                medio: friday['Medio'] ? friday['Medio'].length : 0,
                high: friday['High'] ? friday['High'].length : 0
            },
            {
                name: 'Sat',
                amount: ticketsByDay['Saturday'].length,
                low: saturday['Low'] ? saturday['Low'].length : 0,
                medio: saturday['Medio'] ? saturday['Medio'].length : 0,
                high: saturday['High'] ? saturday['High'].length : 0
            },
            {
                name: 'Sun',
                amount: ticketsByDay['Sunday'].length,
                low: sunday['Low'] ? sunday['Low'].length : 0,
                medio: sunday['Medio'] ? sunday['Medio'].length : 0,
                high: sunday['High'] ? sunday['High'].length : 0
            }
        ])
    }

    useEffect(() => {
        makeGraph()

    }, [tickets])

    return (
        <div className='line-chart-page'>
            <div className='title'>
            <h3 >Tickets Performance</h3>
            </div>
           
            <ResponsiveContainer width={800} height="90%">
                <LineChart className='rojo'
                    width={600}
                    height={250}
                    data={chartArrayByDay}
                    margin={{
                        top: 25,
                        right: 30,
                        left: 40,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    
                    <Legend verticalAlign="top" height={40} />
                    <Line type="monotone" dataKey="low" stroke="#133340" />
                    <Line type="monotone" dataKey="medio" stroke="#18778C"/>
                    <Line type="monotone" dataKey="high" stroke="#A66B56" />
                    
                    
                </LineChart>
            </ResponsiveContainer>
        </div >
    )

}
