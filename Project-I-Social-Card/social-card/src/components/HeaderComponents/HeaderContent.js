import React from 'react';
import Title from "./HeaderTitle";
import './Header.css';


const HeaderContent = (props) => {
    return (
        <div className="headerContent">
            <Title
                title="Lambda School"
                handle="LambdaSchool"
                timestamp="22 May"
            />
            <section className="headerText">
                {props.content}
            </section>
        </div>
    );
}


export default HeaderContent;
