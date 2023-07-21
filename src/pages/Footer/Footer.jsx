/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./FooterLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Jay Bharat Resturant </Footer.Title>
                    <p>Jay Bharat Restaurant: Serving Authentic Indian Cuisine with Flavors that Delight. Experience the Best of Indian Food in a Warm Ambiance. Aromatic Curries, Tandoori Specialties, and Mouthwatering Street Food. Exquisite Dishes with Fresh Ingredients and Authentic Spices. Friendly Staff, Prompt Service, Memorable Dining Moments. Takeout and Delivery Available. Visit Us Today for an Unforgettable Indian Culinary Experience.</p>
                    <div className="social">
          <a href="https://www.facebook.com/example"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/example"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.twitter.com/example"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
                </Footer.Column>
                <Footer.Column>
                   
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Link </Footer.Title>
                    <Footer.Link href="#">Home</Footer.Link>
                    <Footer.Link href="#">About Us</Footer.Link>
                    <Footer.Link href="#">Menu</Footer.Link>
                    <Footer.Link href="#">Gallery</Footer.Link>
                    <Footer.Link href="#">Booking</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Address</Footer.Title>
                    <p>127,1st Cross Rd,Marathahalli,Bengaluru,Karnataka 560037,India</p>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}