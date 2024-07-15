import React, {useState} from "react";
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
import VoteGraph from "./VoteGraph";
import Button from "./components/Button";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function App4(){

    const options = {
        maintainAspectRatio : false,
        responsive : false,
        scales : {
            y: {
                ticks: {
                    display: false
                }
            }
        }};



    const [vginfo, setVginfo] = useState({vgnum : 55, round : 1, tournum : 1});

    return (
        <div>
            <Button onClick = {() => {
                setVginfo({vgnum : 55, round : 1, tournum : 1});
            }}>바꾸기1</Button>
            <Button onClick = {() => {
                setVginfo({vgnum : 55, round : 2, tournum : 1});
            }}>바꾸기2</Button>
            <VoteGraph vgnum = {vginfo.vgnum} round = {vginfo.round} tournum = {vginfo.tournum} height = "500px" width = "800px" />
        </div>
    );
}

export default App4;