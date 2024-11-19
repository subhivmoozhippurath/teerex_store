import React from 'react'

const ProductCard = () => {
  return (
    <>
     {/* // <p>T-Shirt</p> */}
      <div className="card">
        <img src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" />
        <div className="flex cardbottom">
          <p>RS 450/-</p>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard
