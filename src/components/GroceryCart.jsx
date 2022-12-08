import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";
import './components.css';

export default function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <span className="my-cart">My Cart</span>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <svg 
              onClick={() => removeItem(index)}
              className="icon-minus" 
              stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              viewBox="0 0 1024 1024"  
              xmlns="http://www.w3.org/2000/svg">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"></path>
            </svg>            
            <img className="image-item" src={require("../images/" + item + ".png")} alt={item} />
            <span className="text-icon">{item}</span>
            
          </li>
        ))}
      </ul>
      <h2 className="produce-title">Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2 className="pantry-items">Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
