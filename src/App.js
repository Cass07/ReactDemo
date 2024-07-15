import React, {useRef, useMemo, useCallback, useReducer} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";
import Counter from "./Counter";

function countActiveUsers(users){
    //console.log("사용자 수 세는 중...");
    return users.filter(user => user.active).length;
}

const initialState = {
    users : [
        {
            id : 1,
            email : "leonster@",
            username : "Leonster",
            active : true
        },
        {
            id : 2,
            email: "Augustria!",
            username : "augustria",
            active : false
        },
        {
            id : 3,
            email : "Chalphy#",
            username : "chalphy",
            active : false
        }
    ]
};

function reducer(state, action)
{
    switch (action.type){
        case "CREATE_USER" :
            return{
                users : state.users.concat(action.user)
            }
        case "TOGGLE_USER" :
            return{
                ...state,
                users : state.users.map(user => user.id === action.id ? {...user, active : !user.active} : user)
            }
        case "REMOVE_USER" :
            return{
                ...state,
                users : state.users.filter(user=> user.id !== action.id)
            }
        default:
            return state;
    }
}

export const UserDispatch = React.createContext(null);


function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state; //state.users를 users에 넣는다

    const count = useMemo (() => countActiveUsers(users), [users]);

  return (
      <UserDispatch.Provider value = {dispatch}>
          <CreateUser/>
          <UserList users = {users}/>
          <div>활성 사용자 수 : {count}</div>
          <Counter />
      </UserDispatch.Provider>
  );
}

export default App;
