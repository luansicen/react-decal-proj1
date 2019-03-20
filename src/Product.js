import React from "react";

const Product = props => {
  let count = 0;
  function addToCart(productName) {
    if (count >= props.limit) {
      alert("Ther are too many "+productName+" in your cart!")
      return;
    }
    count = count+1;
    alert("There are "+count+" "+productName+ " in your cart!")
  }
    return (
    <div class="card">
      <div class="content">
        <div class="header">{props.productName}</div>
        <div class="description">
          Price: ${props.price}
        </div>
      </div>
    <div class="ui bottom attached button" onClick={(e) => addToCart(props.productName)}>
      <i class="add icon" ></i>
      Add to Cart
    </div>
    </div>
    );
  }


export default Product;
