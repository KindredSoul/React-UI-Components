import React from 'react';
import Thumbnail from "./ImageThumbnail";
import Content from "./HeaderContent";
import './Header.css';

const HeaderContainer = props => {
    return (
        <div className="headerContainer">
            <Thumbnail />
            <Content 
                content="Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"
            />
        </div>
    );
}

export default HeaderContainer;