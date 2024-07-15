import React from "react";
import {MdDone, MdDelete} from 'react-icons/md';
import classNames from "classnames";
import "./TodoItem.scss";
import {useTodoDispatch} from "../TodoContext";

function TodoItem({id, done, text}){

    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type : "TOGGLE", id : id});
    const onRemove = () => dispatch({type : "REMOVE", id : id});

    return(
      <div className="TodoItem">
          <div className = {classNames("CheckCircle", {done})} onClick={onToggle}>{done && <MdDone/>}</div>
          <div className = {classNames("Text", {done})}>{text}</div>
          <div className = "Remove" onClick = {onRemove}><MdDelete/></div>
      </div>
    );
}

export default React.memo(TodoItem);