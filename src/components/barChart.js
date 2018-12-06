import React from 'react';
import {Bar} from 'react-chartjs-2';

export default function BarExample(props) {
    return (
        <Bar
            data={{datasets: props.chartData}}
            width={850}
            height={350}
            redraw={true}
            options={{
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            offsetGridLines: true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0
                        }
                    }
                    ]
                }
            }}
        />
    )
};
