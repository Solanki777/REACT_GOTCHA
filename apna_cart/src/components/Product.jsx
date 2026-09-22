import React from 'react'

export default function Product(props) {
  return (
    <div>
        <h2> {props.product.name}</h2>
        <h2> Price : 
        </h2>
        <span class="badge badge-secondary">₹{props.product.price} </span>
    </div>
  )
}
