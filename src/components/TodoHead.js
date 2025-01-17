import React from "react";
import "./TodoHead.scss";
import {useTodoState} from "../TodoContext";

function TodoHead(){
    const todos = useTodoState();
    const undoneTask = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR", {
        year : "numeric",
        month : "long",
        day : "numeric",
    });
    const dayName = today.toLocaleDateString("ko-KR", {weekday : "long"});

    return(
      <div className = "TodoHead">
          <h1>{dateString}</h1>
          <div className = "day">{dayName}</div>
          <div className="tasks-left">할 일 {undoneTask.length}개 남음</div>
      </div>
    );
}

export default TodoHead;