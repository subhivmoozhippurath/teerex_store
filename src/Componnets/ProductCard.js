import React from 'react'

const ProductCard = ({data}) => {
  console.log(data)
  return (
    <>
     {/* // <p>T-Shirt</p> */}
      <div className="card">
        <img src={data.imageURL} />
        <div className="flex cardbottom">
          <p>{data.currency }  { data.price}/-</p>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard
