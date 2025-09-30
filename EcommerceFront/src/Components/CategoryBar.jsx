import React, { useEffect, useState } from 'react'

export default function CategoryBar() {

    const [Category, setCategory] = useState([]);
    const [categoryProd, setCategoryprod] = useState([]);


    useEffect(()=>{

        fetch('http://localhost:8081/api/categories')
        .then(response => response.json())
        .then(data => setCategory(data))

       
        
    },[])

    
    



  return (
    <>
        <div className='category text-white relative -mt-5 flex gap-3 bg-gray-800'>
            
            {
                Category.map((category)=>(
                    <div className='p-2 flex gap-3 hover:font-semibold' key={category.id}>
                        <ul className='flex '>
                            <button onClick={loadProducts(category.id)}><li>{category.name}</li></button>  
                        </ul>
                    </div>
                ))
            }
        </div>

        <div className='flex justify-between text-white'>
            <p>4 results </p>
            <select className='bg-gray-500 rounded-md p-1'>
                 <option value="someOption">Featured</option>
                <option value="otherOption">Price: Low to High</option>
                <option value="otherOption">Price: High to Low</option>
                <option value="otherOption">Avg: Customer Review</option>
                <option value="otherOption">Newest Arrivals</option>
                <option value="otherOption">Best Sellers</option>



            </select>
        </div>
    </>
  )
}
