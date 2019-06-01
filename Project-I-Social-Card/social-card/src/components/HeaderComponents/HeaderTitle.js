import React from 'react';
import './Header.css';



const HeaderTitle = (props) => {
    return (
        <div className="headerTitle">
            <span><h4>{props.title}</h4> </span>
            <span>@{props.handle} </span>
            <span>{props.timestamp}</span>
        </div>
    )
}

export default HeaderTitle;