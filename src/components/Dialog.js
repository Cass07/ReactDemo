import React, {useEffect, useState} from "react";
import Button from "./Button";
import "./Dialog.scss"
import classNames from "classnames";

function Dialog ({title, children, confirmText, cancelText, onConfirm, onCancel, visible})
{
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);

    useEffect(()=> {
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
    },[localVisible, visible]);

    if(!animate && !localVisible) return null;
    return(
        <div className = {classNames("DarkBackground", animate?"disappear":"")}>
            <div className = {classNames("DialogBlock", animate?"disappear":"")}>
                <h3>{title}</h3>
                <p>{children}</p>
                <div className="ButtonGroup">
                    <Button color = "yellow" onClick = {onCancel}>{cancelText}</Button>
                    <Button color = "blue" onClick = {onConfirm}>{confirmText}</Button>
                </div>
            </div>
        </div>
    );
}

Dialog.defaultProps = {
    confirmText : "확인",
    cancelText : "취소"
}

export default Dialog;
