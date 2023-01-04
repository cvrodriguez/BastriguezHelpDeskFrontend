import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { groupBy } from 'lodash';

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

    useEffect(makePie, [makePie, tickets])

    console.log(pieArray, "new array")
    return (
        <div>
            <PieChart width={800} height={400} >
                <Pie
                    data={pieArray}
                    cx={180}
                    cy={200}
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
        </div>
    )
}