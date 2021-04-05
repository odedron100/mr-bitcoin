import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export const Chart = (props) => {

    return (
        <div className="chart">
            <h1>{props.title}</h1>
            <Sparklines data={props.data}>
                    <SparklinesLine color="red" />
           </Sparklines>

        </div>
    )
}
