import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import CategoryBar from './Components/CategoryBar';

function App() {
  
  const [products, setProducts] = useState([]);


  useEffect(()=>{

    fetch('http://localhost:8081/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])

  console.log(products);
  

  return (
    <>
    <div className='navbar  w-6xl grid justify-center gap-5 m-0  '>
          <Navbar/>
          <CategoryBar/>

          <div className='product-container flex gap-10'>

            {
              products.length ? (
                 <ProductList products = {products} />
              ) :
              (
                <p>No product found</p>
              )
            }
             
            

          </div>
    </div>
      
    </>
  )
}

export default App
