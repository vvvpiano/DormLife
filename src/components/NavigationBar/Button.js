import React from 'react';
import './css/Button.css';

function Button({ image, title }) {
    return (
        <div>
            <div className="nav-image"><img src={image}></img></div>
            <div className="nav-title">{title}</div>
        </div>
    );
}

export default Button;
