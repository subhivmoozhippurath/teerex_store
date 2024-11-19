import React,{useEffect, useState} from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    const fetchData = async() =>{
      const data = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
      const response = await data.json();
      setProducts(response)
      // console.log('response',response)
      
    }
    fetchData()
  },[])
  return (
    <div className='listingContainer container'>
      <div className='filterContainer'>
        <label>
          <input type="checkbox"/>
        </label>

      </div>
      <div className='productContainer'>
      {products.length > 0 ? (
          products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      
    </div>
  )
}

export default ProductList
