import React from 'react';
import './Card.css';

const Content = (props) => {
    return (
        <div className="cardContent">
            <h4>{props.contentTitle}</h4>
            <p>{props.content}</p>
            <div>{props.contentLink}</div>
        </div>
    );
}

export default Content;