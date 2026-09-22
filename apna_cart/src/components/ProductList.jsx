import React from 'react'
import Product from './Product'

// export default function ProductList({product}) {
//     console.log(product)
//   return (
//     <div>
    

//     </div>
//   )
// }


// OR 


export default function ProductList(props) {
  
  return (
    props.productList.map((product,idx)=>{
      return <Product product = {product} key = {idx}/>
    })
  )
  
}
