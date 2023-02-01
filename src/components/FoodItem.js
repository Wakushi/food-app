import React from "react";

export default function FoodItem(props) {

    return (
        <div className="item">
            <img src={props.img} alt={props.name}></img>
            <span className="item-info">
                <h3>{props.name}</h3>
                <p>{props.ingredients.join(', ')}</p>
                <h4>${props.price}</h4>
            </span>
            <i 
            onClick={props.handleAddItem} 
            data-food={props.name} 
            className="fa-solid fa-cart-plus"
            ></i>
        </div>
    )
}