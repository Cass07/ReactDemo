import React, {useEffect} from "react";
import classNames from "classnames";
import "./Table.scss"

function Table ({header, data}){
    const column = header.length;

    useEffect(() => {
        console.log("테이블 새로그림~~");
        return () => {
        };
    }, [header, data]);

    return(
        <table className = {classNames("basicTable")} >
            <thead>
            <tr>
                {
                    header.map((headerCol,index) => (
                        <th key = {index}>{headerCol}</th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {
                data.map((row, index) => (
                    <tr key = {index}>
                        {
                            row.map((rowcol, index2) => (
                                <td key = {index2 + index * column}>{rowcol}</td>
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}

export default Table;
