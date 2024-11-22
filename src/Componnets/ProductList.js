import React,{useEffect, useState} from 'react'
import ProductCard from './ProductCard'
import { SEARCH_IMG } from '../utils/constants'

const ProductList = () => {
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
    const fetchData = async() =>{
      const data = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
      const response = await data.json();
      setProducts(response);
      setFilteredProducts(response);
      // console.log('response',response)
      
    }
    fetchData()
  },[])
  const searchitems = () => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(lowerCaseSearch) ||
        product.color.toLowerCase().includes(lowerCaseSearch) ||
        product.type.toLowerCase().includes(lowerCaseSearch)
      );
    });
    setFilteredProducts(filtered);
  };  return (
    <>
    <diV className='searchContainer container'>
      <input className='searchinput' placeholder="Search for Products..."
      type="input"
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <img className='searchImg' 
      src ={SEARCH_IMG}
      onClick={searchitems}
      />
    </diV>

    <div className='listingContainer container'>
      <div className='filterContainer'>
        <label>
          <input type="checkbox"/>
        </label>

      </div>
      <div className='productContainer'>
      {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>


      
    </div>
    </>

  )
}

export default ProductList
