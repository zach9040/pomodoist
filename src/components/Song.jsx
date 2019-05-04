import React from 'react';

const Song = props => {
    return (
        <div className="card"  >
            <button type="button" onClick={onClick => props.onClick(props.title, props.image, props.link)}>
                <img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain" width="100" height="100" />
                <div className="title" align="center">
                    {props.title}
                </div>
            </button>
            <div align = "right">

            </div>
        </div>
    );
}

export default Song;