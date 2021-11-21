import React from 'react';
import scriptCSS from './DashboardStyles';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart(props) {
    const classes = scriptCSS();

    const userData = [
        {
            name: 'Mon',
            "This Week": 4000,
        },
        {
            name: 'Tue',
            "This Week": 3000,
        },
        {
            name: 'Wed',
            "This Week": 2000,
        },
        {
            name: 'Thurs',
            "This Week": 2780,
        },
        {
            name: 'Fri',
            "This Week": 1890,
        },
        {
            name: 'Sat',
            "This Week": 2390,
        },
        {
            name: 'Sun',
            "This Week": 1490,
        },
        
    ];
    
    return (
        <div className={classes.chart1}>
            <h3 className={classes.chartTitle}>{props.title || 'Store Visitors'}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}  >
                <LineChart
                    data={userData}
                    style={{
                    // display: 'table-cell',
                    // position:'absolute',
                    // width:'50%',
                    // marginTop:'50px'
                }}
                > 
                    <XAxis dataKey="name" stroke="grey" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="This Week" stroke="red"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
