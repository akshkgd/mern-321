import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card';

const foodItems = [
  {
    title: "Classic Burger",
    imageUrl: "https://source.unsplash.com/1600x1000/?burger",
    price: 150,
    desc: "A delicious classic burger with juicy patty, fresh veggies, and special sauce.",
    type: "nonveg",
    ratings: 4.1,
    votes: 120
  },
  {
    title: "Vegetarian Pizza",
    imageUrl: "https://source.unsplash.com/1600x1000/?pizza",
    price: 200,
    desc: "A delightful vegetarian pizza with a variety of colorful toppings and cheesy goodness.",
    type: "veg",
    ratings: 4.8,
    votes: 90
  },
  {
    title: "Spicy Chicken Wings",
    imageUrl: "https://source.unsplash.com/1600x1000/?dosa",
    price: 180,
    desc: "Mouth-watering spicy chicken wings that will leave you craving for more.",
    type: "nonveg",
    ratings: 3.2,
    votes: 150
  },
  {
    title: "Pasta Primavera",
    imageUrl: "https://source.unsplash.com/1600x1000/?pasta",
    price: 160,
    desc: "Delicious pasta loaded with fresh vegetables and a savory sauce.",
    type: "veg",
    ratings: 4.5,
    votes: 110
  },
  {
    title: "Sushi Platter",
    imageUrl: "https://source.unsplash.com/1600x1000/?sushi",
    price: 220,
    desc: "Exquisite sushi platter with a variety of rolls and sashimi.",
    type: "nonveg",
    ratings: 4.9,
    votes: 180
  },
  {
    title: "Chocolate Brownie Sundae",
    imageUrl: "https://source.unsplash.com/1600x1000/?dessert",
    price: 120,
    desc: "Indulge in a decadent chocolate brownie sundae with vanilla ice cream and fudge.",
    type: "veg",
    ratings: 4.3,
    votes: 130
  },
  {
    title: "BBQ Ribs",
    imageUrl: "https://source.unsplash.com/1600x1000/?ribs",
    price: 250,
    desc: "Fall-off-the-bone BBQ ribs smothered in tangy barbecue sauce.",
    type: "nonveg",
    ratings: 3.4,
    votes: 140
  },
  {
    title: "Mango Tango Smoothie",
    imageUrl: "https://source.unsplash.com/1600x1000/?smoothie",
    price: 100,
    desc: "Refreshing mango smoothie with a hint of citrus for a tropical delight.",
    type: "veg",
    ratings: 3.0,
    votes: 95
  }
];
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    {/* <div className="container">
      {
        foodItems.map((item)=>{
          return <Card title={item.title} price={item.price} img={item.imageUrl} ratings={item.ratings} votes={item.votes} desc={item.desc} type={item.type} />
        })
      }
      
    </div> */}
    <App/>
    </>
    


)
