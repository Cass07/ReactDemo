import React, {useContext, useRef} from "react";
import useInputs from "./hooks/useInputs";
import {UserDispatch} from "./App";

const CreateUser = () => {
    const [{username, email}, onChange, reset] = useInputs({username : "", email : ""});
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(4);

    return(
        <div>
            <input name = "username" placeholder="이름" onChange={onChange} value = {username} />
            <input name = "email" placeholder="이름2" onChange={onChange} value={email} />
            <button onClick = {()=>{
                const user = {
                    id : nextId.current,
                    username,
                    email
                };

                dispatch({
                    type : "CREATE_USER",
                    user : user
                });
                reset();
                nextId.current++;
            }}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);