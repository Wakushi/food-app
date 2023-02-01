import pizza from "./assets/pizza.png"
import hamburger from "./assets/hamburger.png"
import beer from "./assets/beer.png"

export const foodData = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        img:pizza,
        price: 14,
        emoji: "🍕",
        inCart:0
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        img:hamburger,
        id: 1,
        inCart:0
        
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 6,
        emoji: "🍺",
        img:beer,
        id: 2,
        inCart:0
    }
]