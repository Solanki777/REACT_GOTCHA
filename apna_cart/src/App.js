import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import React, { use, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const intialproduct = [
    {
      price: 200000,
      name: "Iphone 18 pro",
      quantity: 0,
    },

    {
      price: 9999999,
      name: "Nokia",
      quantity: 0,
    },

    {
      price: 2000040,
      name: "Samsung",
      quantity: 0,
    },
  ];

  let [product, setproduct] = useState(intialproduct);
  let [oldtotal, setnewtotal] = useState(0);

  const icr_quantity = (idx) => {
    // copying the list
    let newproduct = [...product];
    let total = oldtotal;
    newproduct[idx].quantity++;
    total += intialproduct[idx].price;
    setnewtotal(total);
    setproduct(newproduct);
  };

  const dec_quantity = (idx) => {
    let newproduct = [...product];
    let total = oldtotal;
    if (newproduct[idx].quantity > 0) {      
      newproduct[idx].quantity--;
      total -= intialproduct[idx].price;
    }

    setnewtotal(total);
    setproduct(newproduct);
  };

  const resetq = () => {
    let newprod = [...product]
    newprod.map((product) => {
      product.quantity = 0
    })
    setproduct(newprod)
    setnewtotal(0)
  }

  const remove = (idx) =>{
    let newprod = [...product]
    let newtotal = oldtotal
    newtotal -= newprod[idx].quantity * newprod[idx].price
    newprod.splice(idx , 1)
    setproduct(newprod)
    setnewtotal(newtotal)
  }



  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={product}
          icr_quantity={icr_quantity}
          dec_quantity={dec_quantity}
          remove = {remove}
        />
      </main>
      <Footer  total = {oldtotal}  resetq = {resetq}/>
    </>
  );
}

export default App;
