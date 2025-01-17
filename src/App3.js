import React from "react";
import './App3.scss';
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import {TodoProvider} from "./TodoContext";

function App3(){
    return (
        <TodoProvider>
            <TodoTemplate>
                <TodoHead/>
                <TodoList/>
                <TodoCreate/>
            </TodoTemplate>
        </TodoProvider>
    )
}

export default App3;