import React from 'react'
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({data}) => {
  const dispatch = useDispatch()
  const addtocart = () =>{
    dispatch(addItem(data))
  }
  return (
    <>
     {/* // <p>T-Shirt</p> */}
      <div className="card">
        <img src={data.imageURL} />
        <div className="flex cardbottom">
          <p>{data.currency }  { data.price}/-</p>
          <button className="btn" onClick={addtocart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard
