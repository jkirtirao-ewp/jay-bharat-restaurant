/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../Home.css';

const Card = ({image, title, desc}) => {
    return ( 
        <>
            <div className="card">
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <div className="contents">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Card;