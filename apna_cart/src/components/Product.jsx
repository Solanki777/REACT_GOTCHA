import React from 'react'

export default function Product(props) {
  return (
    <div>
        <h2> {props.product.name}</h2>
        <h2> Price : {props.product.price}

        </h2>
    </div>
  )
}
