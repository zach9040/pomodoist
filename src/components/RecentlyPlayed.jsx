import React from 'react';
import {ReactComponent as Archive} from "../icons/archive.svg";

const RecentlyPlayed = props => {
    return (
        <div>
            <h1> Recently Played
                <button className="clear-button" type="button" onClick={props.onClick}>
                    <Archive />
                </button>
            </h1>
            <div className="recent">
                {props.songList.map(song => <div> {song.name} </div>)}
            </div>
        </div>
    );
}

export default RecentlyPlayed;