/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'; 
import '../Menu.css'

const FoodCard = ({ image, title, desc, price }) => {
    return (
        <div className="foodCard">  
            <div className="img">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                <h1>{title}</h1>
                <h2>₹{price}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default FoodCard;