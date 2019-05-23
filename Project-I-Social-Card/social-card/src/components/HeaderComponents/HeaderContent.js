import React from 'react';
import Title from "./HeaderTitle";
import './Header.css';


const HeaderContent = (props) => {
    return (
        <div>
            <Title className="headerTitle"
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
