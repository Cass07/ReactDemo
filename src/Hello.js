import React from "react";

function Hello({color, name}){
    return <div style = {{color}}>Hello world! {name}</div>
}

Hello.defaultProps = {
    color : "black",
    name : "noname"
}

export default Hello;