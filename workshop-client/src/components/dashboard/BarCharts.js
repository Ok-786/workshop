import React, { Fragment } from 'react';
import scriptCSS from './DashboardStyles';

import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, YAxis, Legend, ResponsiveContainer } from 'recharts';



export default function BarCharts(props) {
    const classes = scriptCSS();
    const data = [
        {
            name: 'Mon', Days: 4000, Days: 2400, amt: 2400,
        },
        {
            name: 'Tue', Days: 3000, Days: 1398, amt: 2210,
        },
        {
            name: 'Wed', Days: 2000, Days: 9800, amt: 2290,
        },
        {
            name: 'Thurs', Days: 2780, Days: 3908, amt: 2000,
        },
        {
            name: 'Fri', Days: 1890, Days: 4800, amt: 2181,
        },
        {
            name: 'Sat', Days: 2390, Days: 3800, amt: 2500,
        },
        {
            name: 'Sun', Days: 3490, Days: 4300, amt: 2100,
        },
    ];

    return (
        <Fragment>
            <div className={classes.chart2}>
            <h3 className={classes.chartTitle}>{props.title || 'Real Time Sales'}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}  >
                <BarChart
                    width={'100%'}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Days" fill="rgb(230,0,0)" />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </Fragment>
    )
}