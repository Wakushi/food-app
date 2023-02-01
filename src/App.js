import React from "react";
import Header from "./components/Header";
import FoodItem from "./components/FoodItem";
import Cart from "./components/Cart";
import { foodData } from "./data"
import PaymentModal from "./components/PaymentModal";

export default function App() {

  // States ---

  // cart holds all the selected items 
  const [cart, setCart] = React.useState([])
  // count helps updating the page, causes a re-render
  const [count, setCount] = React.useState(0)
  // totalPrice is the sum of all selected items
  const [totalPrice, setTotalPrice] = React.useState(0)
  // userName holds the customer's name information from the payment form.
  const [userName, setUsername] = React.useState('')

  // Functions ---

  // handleAddItem checks which item from our menu (foodData) was selected and
  // adds it to the cart. 
  function handleAddItem(event) {
    foodData.forEach((food) => {
      const newFoodArray = []
      if(food.name === event.target.dataset.food){
        food.inCart ++  // increment to track how many times the same item was added to the cart
        if(!cart.includes(food)){ // We check if the cart doesn't already holds this item...
          newFoodArray.push(food) // ... to prevent multiple render of the same item in the cart list.
          setCart(prevCart => prevCart.concat(newFoodArray))  
        }
      }
    })
    setCount(prevCount => prevCount + 1) // causes a re-render 
  }

  // handleRemoveItem check which item from the cart was clicked to remove x1 from the cart.
  function handleRemoveItem(event) {
    cart.forEach((item) => {  // We iterate over the cart array to find the item that matches
      if(item.name === event.target.dataset.food){
        if(item.inCart > 1){ // If there is more than x1 of an item in the cart, we decrement.
          item.inCart--
        } else if (item.inCart === 1){  // If there is only x1 left of an item, we remove it from the cart
          item.inCart = 0               // with the filter() + splice() methods.
          cart.filter(function(val, index, arr){
            if(val.name === item.name){
              arr.splice(index,1)
              return true
            }
            return false
          })
        }
      }
    })
    setCount(prevCount => prevCount + 1) 
  }

  // getOrderTotal calculates the cart's current total price. 
  function getOrderTotal(){
    let price = 0
    cart.forEach((item)=>{
      if(item.inCart > 0){
        price += item.price * item.inCart
      }
    })
    return price
  }

  // displayModal handles the displaying of the payment window. 
  function displayModal() {
    document.getElementById('modal').classList.toggle('hidden')
  }

  // Payment Form ---

  const paymentForm = document.getElementById('pay-form')
 
  if(paymentForm){
    paymentForm.addEventListener('submit',(e)=>{  // Listens for the payment form submission
      e.preventDefault()
      const payFormData = new FormData(paymentForm) // We gather the data from the submitted form 
      for (var [key, value] of payFormData.entries()) { // We loop over the FormData object to get the name.
        if(key === 'name'){
          setUsername(value)  // We save the name submitted to display it in the confirmation message.
        }
      }
      document.getElementById('modal').classList.add('hidden') // We hide the modal after the form's submission.
      setCart([]) // We empty the cart.
    })
  }

  // useEffects ---

  // Updates the price using getOrderTotal() every time there's a render caused by a cart update.
  React.useEffect(()=>{
    setTotalPrice(getOrderTotal())
  },[count])

  // Component generation ---

  // Creates components by iterating over our foodData array.
  const foodElements = foodData.map((food) => {
    return (
      <FoodItem
        key={food.id}
        id={food.id}
        name={food.name}
        ingredients={food.ingredients}
        price={food.price}
        img={food.img}
        handleAddItem={handleAddItem}
      />
    )
  })

  return (
    <>
      <PaymentModal displayModal={displayModal} />
      <Header />
      <main>
       {foodElements}
       {cart.length > 0  && <Cart 
                              items={cart} 
                              handleRemoveItem={handleRemoveItem}
                              totalPrice={totalPrice}
                              displayModal={displayModal}
                            />}
      {userName != '' && <h6 className="confirmation">Thanks, {userName}! Your order is on its way!</h6>}
      </main>
    </>
  )
}