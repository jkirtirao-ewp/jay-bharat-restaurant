/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../Home.css";

const BookTable = () => {
    const [noOfGuests, setNoOfGuests] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [mealType, setMealType] = useState("Breakfast");
    const [message, setMessage] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        /*

        const data = new FormData();
        data.set("noOfGuests", noOfGuests);
        data.set("bookingDate", bookingDate);
        data.set("mealTyle", mealType);
        data.set("message", message);

        console.log(data);


        const response = await fetch("api/endpoint/link", {
            method: "GET"/"POST"/"PUT/"DELETE",
            body: data,
            credentials: "included",
        });
        
        */
    }

    return(
            <form id="bookTableForm" onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Number of guests"
                    value={noOfGuests}
                    onChange={(ev) => setNoOfGuests(ev.target.value)}
                />
                <div>
                    <input
                        type="date"
                        value={bookingDate}
                        onChange={(ev) => setBookingDate(ev.target.value)}
                    />
                    <select name="" id="" value={mealType} onChange={(ev) => setMealType(ev.target.value)}>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <textarea  
                    placeholder="Message"
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                >
                </textarea>
                <button type="submit">Book Now</button>
            </form>
    )
}

export default BookTable