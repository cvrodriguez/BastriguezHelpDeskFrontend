import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { groupBy } from 'lodash';

import '../style/pieChartPage.css'

import { useAppSelector } from '../hooks';
import { selectTickets } from '../store/ticket/slectors';

export const PieChartComponent: React.FC<{}> = () => {

    type Graph = {
        name: string,
        value: number
    }

    const tickets = useAppSelector(selectTickets)
    const [pieArray, setPieArray] = useState([] as Graph[])
    const COLORS = ['#5BCCD9', '#18778C', '#133340', '#FF8042'];

    const makePie = () => {
        if (tickets.length === 0) return
        const severityArray = groupBy(tickets, (t) => {
            if (t.state === 'Closed') return 'Closed'
            if (t.state === 'Pending') return 'Pending'
            if (t.state === 'Open') return 'Open'
        })

        setPieArray([
            {
                name: 'Open',
                value: severityArray['Open'].length
            },
            {
                name: 'Pending',
                value: severityArray['Pending'].length
            },
            {
                name: 'Closed',
                value: severityArray['Closed'].length
            }
        ])
    }

    useEffect(() => {
        makePie()
    }, [tickets])

    return (
        <div className='pie-chart-page'>
            <div className='title'>
            <h3 >Tickets State</h3>
            </div>
            
            <PieChart width={800} height={220} >
                <Pie
                    data={pieArray}
                    cx={160}
                    cy={110}
                    innerRadius={60}
                    outerRadius={70}
                    paddingAngle={7}
                    dataKey="value"

                >
                    {pieArray.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

            </PieChart>
            <div className='box'>
            <input disabled className='box-input' ></input > <label>Pending</label>
            </div>
            <div className='box'>
            <input disabled className='box-input box2' ></input > <label>Closed</label>
            </div>
            <div className='box'>
            <input disabled className='box-input box3'  ></input > <label>Open</label>
            </div>
      
        </div>
    )
}