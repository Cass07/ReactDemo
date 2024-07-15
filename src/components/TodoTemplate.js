import React from "react";
import "./TodoTemplate.scss"

function TodoTemplate({children}){
    return (
    <div className = "TodoTemplate">
        {children}
    </div>
    );
}

export default TodoTemplate;