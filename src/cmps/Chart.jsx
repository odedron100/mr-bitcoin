import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export const Chart = (props) => {

    return (
        <div className="chart-container">
            <h1>{props.title}</h1>
            <Sparklines data={props.data}>
                    <SparklinesLine className="chart" color="#59aaea" />
           </Sparklines>

        </div>
    )
}
