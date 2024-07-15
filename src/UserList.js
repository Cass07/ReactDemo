import React, {useEffect, useContext} from "react";
import {UserDispatch} from "./App";

const User = React.memo(function User({user}){

    const dispatch = useContext(UserDispatch);

    useEffect(() => {
        //console.log("conponent render");
        //console.log(user);
        return () => {
            //console.log("component vanish");
            //console.log(user);
        };
    }, [user]);
    return(
        <div>
            <b style = {{cursor : 'pointer', color : user.active? 'green' : 'black'}} onClick = {()=>{
                dispatch({type : "TOGGLE_USER", id : user.id});
            }}>
                {user.username}
            </b> <span>email : {user.email}</span>
            <button onClick = {()=>{
                dispatch({type : "REMOVE_USER", id : user.id});
            }}>삭제</button>
        </div>
    );
});

function UserList({users}){
    return(
        <div>
            {
                users.map((user) => (
                    <User user = {user} key = {user.id} />
                ))
            }
        </div>
    );
}

export default React.memo(UserList);