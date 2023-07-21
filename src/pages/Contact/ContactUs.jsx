/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ContactUs.css"


const Form = () => {
    const [data, setData] = useState({name:"", email:"", message:"", phone:""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(data)

    }
    return (
        <>
        <form method="post" onSubmit={handleSubmit} id="form">
            <h1>Contact <span>Us</span></h1>
            <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter your full name" required/>
            <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com" required/>
            <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="Type your message here..." required/>
            <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="Phone number  (optional)" />
            <button type="submit">Submit</button>
            </form>
           
            <section id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7505191.250260705!2d72.14717736929796!3d23.292375867405138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398da934d2d9da5b%3A0x6119226bcfec4bad!2sHOTEL%20YASH!5e0!3m2!1sen!2sin!4v1688574970960!5m2!1sen!2sin"
                // eslint-disable-next-line react/no-unknown-property
                width={"100%"} height={"350"} allowfullscreen="" title='contact' loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
            </section>
        
        </>
    );
}

export default Form