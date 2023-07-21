/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../Home.css';

const MenuSpecial = ({image, title, desc}) => {
    return ( 
        <>
            <div className="card">
                <div className="icon">
                    <img src={image} alt="" />
                </div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>

        </>
    )
}

export default MenuSpecial;