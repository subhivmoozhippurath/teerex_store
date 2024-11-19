import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='listingContainer container'>
      <div className='filterContainer'>
        <label>
          <input type="checkbox"/>
        </label>

      </div>
      <div className='productContainer'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />



      </div>
      
    </div>
  )
}

export default ProductList
