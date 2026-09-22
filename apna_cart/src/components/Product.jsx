import React from "react";

export default function Product(props) {
  return (
    <div>
      <h2> Item Name : {props.product.name}</h2>
      <h2>
        {" "}
        Price :<span class="badge bg-secondary">₹{props.product.price} </span>
      </h2>
      <button type="button" class="btn btn-primary btn-sm">
        Small button
      </button>
      <button type="button" class="btn btn-secondary btn-sm">
        Small button
      </button>

      <hr></hr>
    </div>
  );
}
