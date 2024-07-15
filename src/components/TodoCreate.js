import React, {useState} from "react";
import classNames from "classnames";
import {MdAdd} from "react-icons/md";
import "./TodoCreate.scss";
import {useTodoDispatch, useTodoNextId} from "../TodoContext";

function TodoCreate(){

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => {
        setOpen(!open);
    }

    const onChange = e => {
        setValue(e.target.value);
    }

    const onCreate = e =>{
        e.preventDefault();
        dispatch({type : 'CREATE', todo : {
                id : nextId.current,
                text : value,
                done : false
            }});
        setValue("");
        setOpen(false);
        nextId.current++;
    }

    return(
      <>
          {open &&
          <div className="InsertFormPosition">
              <form className="InsertForm" onSubmit={onCreate}>
                  <input className="Input" autoFocus placeholder="플레이스홀더" onChange={onChange} value = {value}/>
              </form>
          </div>
          }
          <button className={classNames("CircleButton", {open})} onClick={onToggle}>
              <MdAdd />
          </button>
      </>
    );

}

export default React.memo(TodoCreate);