import React from 'react';
import {ReactComponent as Play} from "../icons/play.svg";

function Previous(onClick) {
    return (
        <button className="timer-button" type="button" onClick={onClick}>
            <Play />
        </button>
    );
}

export default Previous;