import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import React ,{useState} from 'react';
import Footer from './components/Footer';

function App() {
  const intialproduct = [
    {
      price : 200000,
      name : "Iphone 18 pro",
      quantity : 0,
    },
    
    {
      price : 9999999,
      name : "Nokia",
      quantity : 0,
    },
    
    {
      price : 2000040,
      name : "Samsung",
      quantity : 0,
    },
    
  ]

  let [product , setproduct] = useState(intialproduct)

  const icr_quantity = (idx) =>{

    // copying the list 
    let newproduct = [...product]
    newproduct[idx].quantity++
    setproduct(newproduct)
  }
  
  const dec_quantity = (idx) => {
    let newproduct = [...product]
    if (newproduct[idx].quantity > 0) {
      newproduct[idx].quantity--
    }
    setproduct(newproduct)
  }

  return (
  <>
  <Navbar/>
  <main className = "container mt-5">
  <ProductList productList = {product} icr_quantity = {icr_quantity} dec_quantity = {dec_quantity}/>
  </main>
  <Footer/>
  </>
  ); 
}

export default App;
