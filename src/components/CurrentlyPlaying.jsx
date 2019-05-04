import React from 'react';

const Current = props => {
    return (
        <div>
            <img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain" width="200" height="200" />
            <h2> Currently Playing </h2>
            <h3 className="title">
                {props.title}
            </h3>
        </div>
    );
}

export default Current;

