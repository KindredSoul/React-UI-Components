import React from 'react';
import './Card.css';
import Image from '../Images/reactbackground.png';


const CardBanner = (props) => {
    return (
        <img className="cardBanner" src={Image} alt="react-background" />
    )
}


export default CardBanner;