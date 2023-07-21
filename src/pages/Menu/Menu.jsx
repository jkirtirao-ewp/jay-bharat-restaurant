/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GrNext, GrPrevious } from 'react-icons/gr';
import FoodCard from "./components/FoodCard";

import "../Menu/Menu.css";

import b1 from './assets/b1.jpeg';
import b2 from './assets/b2.jpg';
import b3 from './assets/b3.jpg';
import b4 from './assets/b4.jpg';
import b5 from './assets/b5.jpg';
import b6 from './assets/b6.jpg';
import l1 from './assets/l1.jpg';
import l2 from './assets/l2.jpg';
import l3 from './assets/l3.jpg';
import l4 from './assets/l4.jpg';
import l5 from './assets/l5.jpg';
import l6 from './assets/l6.jpg';
import d1 from './assets/d1.jpg';
import d2 from './assets/d2.jpg';
import d3 from './assets/d3.jpg';
import d4 from './assets/d4.jpg';
import d5 from './assets/d5.jpg';
import d6 from './assets/d6.jpg';

const Menu = () => {
    const [mealType, setMealType] = useState("Breakfast");

    const selectMealType = (ev) => {
        // set design
        const mealButton = document.getElementsByClassName("mealButton");
        for (var i = 0; i < mealButton.length; i++) {
            mealButton[i].classList.remove("mealActive");
        }
        ev.target.classList.add("mealActive");

        // set type of meal
        // if (ev.target.value === "Breakfast") {
        //     setMealType("Breakfast");
        // } else if (ev.target.value === "Lunch") {
        //     setMealType("Lunch");
        // } else if (ev.target.value === "Dinner") {
        //     setMealType("Dinner");
        // }

        setMealType(ev.target.value);
    }

    const infoCardDetails = [
        {
            type: "Breakfast",
            image: b1,
            title: "Fake French Toast",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 50,
        },
        {
            type: "Breakfast",
            image: b2,
            title: "Samosa",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 40,
        },
        {
            type: "Breakfast",
            image: b3,
            title: "Poori Sabji",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 60,
        },
        {
            type: "Breakfast",
            image: b4,
            title: "Idli Sambar and Chutney",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 60,
        },
        {
            type: "Breakfast",
            image: b5,
            title: "Sev Poha with Whole Tomato",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 40,
        },
        {
            type: "Breakfast",
            image: b6,
            title: "Foot-long Dosa",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 80,
        },
        {
            type: "Lunch",
            image: l1,
            title: "Veg Pulav",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 120,
        },
        {
            type: "Lunch",
            image: l2,
            title: "Indian Curry with Jeera Rice",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 100,
        },
        {
            type: "Lunch",
            image: l3,
            title: "Protein Sprouts Tiffin Meal",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 150,
        },
        {
            type: "Lunch",
            image: l4,
            title: "Indian Naan Bread",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 30,
        },
        {
            type: "Lunch",
            image: l5,
            title: "Indo-Chinese-Italian Pasta Noodles",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 70,
        },
        {
            type: "Lunch",
            image: l6,
            title: "Veg Salad",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 60,
        },
        {
            type: "Dinner",
            image: d1,
            title: "Indian Paratha Bread with Curd",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 40,
        },
        {
            type: "Dinner",
            image: d2,
            title: "Whirlpool Salad",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 70,
        },
        {
            type: "Dinner",
            image: d3,
            title: "Indian Veg Thali Combo",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 150,
        },
        {
            type: "Dinner",
            image: d4,
            title: "Tawa Roti",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 50,
        },
        {
            type: "Dinner",
            image: d5,
            title: "Mix Veg and Roti Combo",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 50,
        },
        {
            type: "Dinner",
            image: d6,
            title: "Indian Sabji With Sarso Rice",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
            price: 30,
        },
    ];


    return (
        <div id="menuPage">
            <div className="menuHeading">
                <h1>Our Menu</h1>
                <p>Lorem ipsum dolor, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sit! sit amet consectetur adipisicing elit. Non ratione exercitationem reprehenderit dolores quibusdam doloremque! Distinctio ipsa iure iste rem.</p>
            </div>

            <div className="topSection">
                <div className="mealSelect">
                    <button value="Breakfast" className="mealButton mealActive" onClick={selectMealType} >Breakfast</button>
                    <button value="Lunch" className="mealButton" onClick={selectMealType}>Lunch</button>
                    <button value="Dinner" className="mealButton" onClick={selectMealType}>Dinner</button>
                </div>
            </div>

            <div className="bottomSection">
                {/* {mealType === "Breakfast" && */}
                    {infoCardDetails.map((food, index) => {
                        if (food.type === mealType) {
                            return (
                                <FoodCard
                                    key={index}
                                    image={food.image}
                                    title={food.title}
                                    desc={food.desc}
                                    price={food.price}
                                />
                            );
                        }
                    })
                }
                
                {/* <FoodCard /> */}
            </div>
        </div>
    )
};

export default Menu