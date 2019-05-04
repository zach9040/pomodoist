import React from 'react';
import { ReactComponent as Pause } from '../icons/pause.svg';
import { ReactComponent as Play } from '../icons/pause.svg';

function PausePlayButton({ onClick}) {
  return (
    <button className="timer-button" type="button" onClick={onClick}>
      {<Pause />}
    </button>
  );
}

export default PausePlayButton;
