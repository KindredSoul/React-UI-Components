import React from 'react';
import './Header.css';



const HeaderTitle = (props) => {
    return (
        <div className="headerTitle">
            <span>{props.title} </span>
            <span>@{props.handle} </span>
            <span>{props.timestamp}</span>
        </div>
    )
}

export default HeaderTitle;