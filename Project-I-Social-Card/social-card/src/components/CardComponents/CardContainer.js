import React from 'react';
import './Card.css';
import Banner from './CardBanner';
import Content from './CardContent';


const CardContainer = () => {
    return (
        <div className="cardContainer">
            <a href="https://www.reactjs.org">
                <Banner />
                <Content 
                    contentTitle="Get started with React"
                    content="React makes it painless to create interactive UIs. Design simple views for each state in your application."
                    contentLink="reactjs.org"/>
            </a>
        </div>
    )
}


export default CardContainer;