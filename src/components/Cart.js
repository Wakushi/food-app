import React from "react";

export default function Cart(props) {

    const orderElements = props.items.map((item)=>{

        return (
            <div className="order-item">
                <i 
                    onClick={props.handleRemoveItem} 
                    data-food={item.name} 
                    className="fa-regular fa-square-minus"
                ></i>
                <h5>{item.name}</h5>
                <span className="item-x">x{item.inCart}</span>
                <h6>${item.price * item.inCart}</h6>
            </div>
        )
    })

    return (
        <section className="cart">
          <h5 className="order-title">Your order</h5>

          <div className="order-items">
            {orderElements}
          </div>

          <div className="total-price">
            <h5>Total price</h5>
            <h6>${props.totalPrice}</h6>
          </div>

          <button 
            onClick={props.displayModal}
            className="order-btn"
            id="completeBtn"
          >Complete order</button>  
          
        </section>
    )
}