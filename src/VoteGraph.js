import React, {useState, useEffect, useReducer} from "react";
import axios from 'axios';
import Graph from "./Graph";
import Table from "./components/Table"

function VoteGraphReducer(state, action){
    switch(action.type)
    {
        case "LOADING" :
            return{
                loading  :true,
                data : null,
                error : null,
                graphdata : null
            };
        case "SUCCESS" :
            return{
                loading : false,
                data : action.data,
                error : null,
                graphdata : action.graphdata
            };
        case "ERROR" :
            return{
                loading : false,
                data: null,
                error : action.error,
                graphdata: null
            }
        default :
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}


function VoteGraph ({options, vgnum, round, tournum, ...rest}){

    const [state, dispatch] = useReducer(VoteGraphReducer, {
        loading : false,
        data: null,
        error : null,
        graphdata: null
    });

    const [tableheader, setHeader] = useState(null);
    const [tabledata, setTabledata] = useState(null);

    const url = "https://feh.wiki/voting/api/v1/vgdata/vgnum/" + vgnum + "/round/"+round+"/tournum/" + tournum;

    const fetchData = async() => {
        try{
            dispatch({type : "LOADING"});
            const response = await axios.get(url);
            const label = response.data.map(data1 => (data1.timeIndex));
            const data1 = response.data.map(data1 => (data1.team1Score));
            const data2 = response.data.map(data1 => (data1.team2Score));
            setTabledata(response.data.map((data1, index, array) => ([data1.timeIndex, data1.team1Score, data1.team2Score,
                index === 0 ? data1.team1Score : data1.team1Score - array[index-1].team1Score,
                index === 0 ? data1.team2Score : data1.team2Score - array[index-1].team2Score])));
            setHeader(["시간", "1 점수", "2 점수", "1 증가량", "2 증가량"]);

            dispatch ({type : "SUCCESS", data : response.data, graphdata : {
                    labels : label,
                    datasets:[{
                        label: 'Dataset 1',
                        data: data1,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                        {
                            label: 'Dataset 2',
                            data: data2,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                    ]
                }});

        }catch (e){
            dispatch({type : "ERROR", error : e});
        }
    };
    useEffect(() => {
        fetchData();
        console.log("그래프 데이터 새로만듬~~");
        return () => {
        };
    }, [vgnum, round, tournum]);


    if(!state.loading && !state.error && state.graphdata != null && state.data.length > 0)
    {
        return (
            <div>
                <h2>{vgnum}회 {round}라운드 {tournum}</h2>
                <Graph graphdata = {state.graphdata} options = {options} {...rest}/>
                <Table header = {tableheader} data = {tabledata}/>
            </div>

        )
    }else if(state.data != null && state.data.length === 0){
        return <div>데이터 없음.</div>;
    }else{
        return <div>로딩중...</div>;
    }

}

VoteGraph.defaultProps = {
    vgnum : 55,
    round : 1,
    tournum : 1
};


export default VoteGraph;