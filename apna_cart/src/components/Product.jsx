import React from "react";

export default function Product(props) {
  return (
    <div className = "row">
      <div className="col-8">
        <div>
          <h2> Item Name : {props.product.name}</h2>
          <h2>
            {" "}
            Price :
            <span class="badge bg-secondary">₹{props.product.price} </span>
          </h2>
        </div>
        <div>
          <button type="button" class="btn btn-primary btn-sm">
            +
          </button>

          <h2 class="btn sm">{props.product.quantity}</h2>

          <button type="button" class="btn btn-secondary btn-sm">
            {" "}
            -
          </button>
        </div>

        <hr></hr>
      </div>


      <div className = "col-4">
        {props.product.quantity * props.product.price}

      </div>
    </div>
  );
}
