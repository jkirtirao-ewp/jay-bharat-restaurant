/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";

import CoverImg from "./assets/background-image.png";
import Menu1 from "./assets/m1.webp";
import Menu2 from "./assets/m2.webp";
import Menu3 from "./assets/m3.webp";
import Menu4 from "./assets/m4.webp";
import a1 from "./assets/a1.jpg";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.jpg";
import a4 from "./assets/a4.jpg";

import BookTable from "./components/BookTable";
import Card from "./components/Card";
import HealthyFood from "./components/HealthyFood";
import MenuSpecial from "./components/MenuSpecial";

import { GiHotMeal } from 'react-icons/gi';
import { GiNoodles } from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Home = () => {

    const infoCardDetails = [
        {
            image: Menu1,
            title: "Sandwich",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
        },
        {
            image: Menu3,
            title: "Hamburger",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
        },
        {
            image: Menu2,
            title: "Sandwich",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
        },
        {
            image: Menu4,
            title: "Hamburger",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
        },
        {
            image: Menu3,
            title: "Sandwich",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
        },
        {
            image: Menu2,
            title: "Hamburger",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
        },
        {
            image: Menu1,
            title: "Sandwich",
            desc: "Making a resvation at delicious restaurant is easy and Order now",
        },
    ];

    const healthyFoodDetails = [
        {
            icon: <GiHotMeal />,
            heading: "Healthy Meal",
            desc: "Making a reservation at delicious restaurant is easy and takes just a couple of mintutes.",
        },
        {
            icon: <GiNoodles />,
            heading: "Fast Food",
            desc: "Making a reservation at delicious restaurant is easy and takes just a couple of mintutes.",
        },
        {
            icon: <AiOutlineCoffee />,
            heading: "Delicious Coffee",
            desc: "Making a reservation at delicious restaurant is easy and takes just a couple of mintutes.",
        },
    ];

    const menuSpecialDetails = [
        {
            image: a1,
            title: "Pure Ingredients",
            desc: "Find all ingredients pure and fresh",
        },
        {
            image: a2,
            title: "Sustainability",
            desc: "Deliveprofessional and personalized",
        },
        {
            image: a3,
            title: "Environmentalism",
            desc: "Integrated multi-asset class analytics.",
        },
        {
            image: a4,
            title: "Formula Transparency",
            desc: "Unique food, and standard",
        },
        
    ];

  return (
    <>
        <div className="home-container">
            <div className="home-banner-container">
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Your Favourite Food Delivered Hot & Fresh
                    </h1>
                    <p className="primary-text">
                        Healthy switcher chefs do all the prep work, like peeding, chopping
                        & marinating, so you can cook a fresh food.
                    </p>
                    <Link to="/menu">
                        <button className="secondary-button">Order Now</button>
                    </Link>
                </div>
                <div className="home-image-section">
                    <img src={CoverImg} alt="" />
                </div>
            </div>
        </div>

        <section className="pimg3">
            <div className="ptext-only">
                <div className="shadow">
                    <h1>Making a reservation at Delicious restaurant is easy and takes just a couple of minutes.</h1>
                </div>
            </div>
        </section>

        <section className="section section-light">
            <div className="info-container">
                <div className="info-container-content">
                    <div>
                        <h1>Book a Table</h1>
                        <p>etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac</p>
                    </div>
                    <BookTable />
                </div>
            </div>
        </section>

        <section className="pimg2">
            <div className="service-container">
                <h1>Our Specials</h1>
                <div className="services-cards">
                    {infoCardDetails.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                image={card.image}
                                title= {card.title}
                                desc={card.desc}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
        
        <section className="section section-light">
            <div className="choose">
                <h3>Best way to eat healthy food</h3>
                <div className="c-cards">
                    {healthyFoodDetails.map((healthyFood, index) => {
                        return (
                            <HealthyFood
                                key={index}
                                icon={healthyFood.icon}
                                heading= {healthyFood.heading}
                                desc={healthyFood.desc}
                            />
                        );
                    })}
                </div>
            </div>
        </section>

        <section className="pimg3">
            <div className="ptext-only">
                <div className="shadow">
                    <h1>Upgrade To The Latest Taste!</h1>
                </div>
            </div>
        </section>

        <section className="section section-light">
            <div className="different">
                <h3>What Makes Our Menus Special</h3>
                <div className="d-cards">
                    {menuSpecialDetails.map((menuSpecial, index) => {
                        return (
                            <MenuSpecial
                                key={index}
                                image={menuSpecial.image}
                                title= {menuSpecial.title}
                                desc={menuSpecial.desc}
                            />
                        );
                    })}
                </div>
            </div>
        </section>

        <section className="pimg3">
            <div className="ptext-only">
                <div className="shadow">
                    <h1>Where every flavor tells a story, for the love of delicious food.</h1>
                </div>
            </div>
        </section>
          
        <section className="section section-light">
            
        </section>
             
    </>
    
  )
}

export default Home;