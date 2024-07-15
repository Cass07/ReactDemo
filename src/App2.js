import React, {useState, useEffect} from "react";

import CheckBox from "./components/CheckBox";
import Button from "./components/Button";

import "./App2.scss";
import Dialog from "./components/Dialog";

const testArr = [
    {
        id : 1,
        title : "test",
        checked : false
    },
    {
        id : 2,
        title : "test2",
        checked : true
    },
    {
        id : 3,
        title : "test3",
        checked : false
    }
];

function App2(){

    const [comps, setComps] = useState(testArr);
    const [dialog, setDialog] = useState(false);
    const onChange = (id) =>{
        setComps(comps.map(comp => comp.id === id ? {...comp, checked : !comp.checked} : comp));
    };

    const onCancel = () => {
        console.log("cancel!");
        setDialog(false);
    }
    const onConfirm = () => {
        console.log("confirm!");
        setDialog(false);
    }
    const openDialog = () =>{
        setDialog(true);
    }


    return (
        <div className = "App2">
            {
                comps.map((comp) => (
                    <CheckBox onChange = {() => onChange(comp.id)} checked = {comp.checked} key = {comp.id}>
                        {comp.title}
                    </CheckBox>
                ))
            }

            <div className = "buttons">
                <Button size = "large" onClick = {setDialog}>Button</Button>
                <Button>Button</Button>
                <Button size = "small">Button</Button>
            </div>
            <div className = "buttons">
                <Button size = "large" color = "red">Button</Button>
                <Button color = "red">Button</Button>
                <Button size = "small" color = "red">Button</Button>
            </div>
            <div className = "buttons">
                <Button size = "large" color = "yellow" outline>Button</Button>
                <Button color = "yellow" outline>Button</Button>
                <Button size = "small" color = "yellow" outline>Button</Button>
            </div>
            <div className = "buttons">
                <Button size = "large" color = "yellow" fullWidth>Button</Button>
                <Button color = "red" outline fullWidth>Button</Button>
                <Button size = "small" color = "blue" fullWidth>Button</Button>
            </div>
            <Dialog title = "테스트테스트" onCancel={onCancel} onConfirm={onConfirm} visible={dialog}>
                테스트테스트 p태그
            </Dialog>
        </div>
    );
}

export default App2;