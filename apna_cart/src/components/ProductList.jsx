import React from "react";
import Product from "./Product";

// export default function ProductList({product}) {
//     console.log(product)
//   return (
//     <div>

//     </div>
//   )
// }

// OR

export default function ProductList(props) {
  return props.productList.length > 0
      ? 
      props.productList.map((product, idx) => {
    
    return (
      <Product
        product={product}
        key={idx}
        icr_quantity={props.icr_quantity}
        idx={idx}
        dec_quantity={props.dec_quantity}
        remove = {props.remove}
      />
    )
  })
  : <h1> No product in the cart</h1>
}
