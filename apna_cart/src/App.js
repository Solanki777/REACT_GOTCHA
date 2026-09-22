
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
// import Footer from './components/Footer';

function App() {
  const product = [
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

  return (
  <>
  <Navbar/>
  <main className = "container mt-5">
  <ProductList productList = {product}/>
  </main>
  {/* <Footer/> */}
  </>
  ); 
}

export default App;
