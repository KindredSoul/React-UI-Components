import React from 'react';
import image from "../Images/lambdacrest.png";
import './Header.css';

const Thumbnail = () => {
    return(
        <div className="headerThumbnail">
            <img src={image} alt="Thumbnail" />
        </div>
    );
}

export default Thumbnail;