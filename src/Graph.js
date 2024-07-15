import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function Graph({graphdata, options, ...rest}) {

    return(
        <div>
            <Line data = {graphdata} options={options} {...rest} />
        </div>
    );
}

Graph.defaultProps = {
    options : {
        maintainAspectRatio : false,
        responsive : false,
        scales : {
            y: {
                ticks: {
                    display: false
                }
            }
        }},
};

export default Graph;
