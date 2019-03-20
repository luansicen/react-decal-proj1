import React from "react";
import Product from "./Product";
import "./styles/cart.css";
import ProductData from "./Data";

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
        <div class="ui cards">
            {ProductData.products.map(p => (<Product productName={p.name} price={p.cost.toString()} limit={p.stock}/>))}
        </div>
        </div>
    );
  }

}

export default Cart;
