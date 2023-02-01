import React from "react";

export default function PaymentModal(props) {

    return (
        <div id="modal" className="modal hidden">
            <i onClick={props.displayModal} className="fa-regular fa-circle-xmark"></i>
            <h5>Enter card details</h5>
            <form id="pay-form">
                <input 
                    required 
                    type="text" 
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                ></input>
                <input 
                    required 
                    type="text" 
                    placeholder="Enter card number"
                    name="card"
                    id="card"
                ></input>
                <input 
                    required 
                    type="text" 
                    placeholder="Enter CVV"
                    name="cvv"
                    id="cvv"
                ></input>
                <button type="submit" id='pay-btn' className="order-btn">Pay</button>
            </form>
            
        </div>
    )
}