import React, {useState} from "react";

function Item({ name, category }) {
  
  const [addItem, setAddItem] = useState(false)

  function handleAddItemClick(){
    setAddItem((addItem) => !addItem)
  }
  
  return (
    <li className={addItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItemClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
