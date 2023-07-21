/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../Home.css";

const HealthyFood = ({icon, heading, desc}) => {
    return ( 
        <>
            <div className="card">
                <div className="icon">
                    {icon}
                </div>
                <h1>{heading}</h1>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default HealthyFood;