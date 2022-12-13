import FC from './FC.json'
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

//Honestly just KYS 

import './Graph.css'

export default function Graph(props){

    let data = []
    //Format Time (Once Again), Fix graph size and Style It
    FC.forecasts[0].hours.forEach((Data) => {data.push({Temperature: Data.temp})})
    //Style Everything properly!!!
    //Optimize this mess 
    return(
        <>
        <div className='Card'>
            <h2>Graph</h2>
            <ResponsiveContainer width="100%" height="20%">
            <LineChart data={data}>
                <Line dataKey="Temperature" stroke="#FE8019" dot={true} strokeWidth={2.5} />
                <Tooltip></Tooltip>
            </LineChart>
            </ResponsiveContainer>
        </div>
        </>
        )

}