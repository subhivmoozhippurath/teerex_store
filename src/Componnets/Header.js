import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="headerContainer container">
      <h1 className="headerName">TeeRex Store</h1>
      <ul className='navbar'>
        <li className="p-4">
          <Link to="/"> ProductList</Link>
        </li>

        <li>
          <Link to="/cart">
            <img
              className="cartlogo"
              src="https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg"
              alt="Cart"
            />
          </Link><span>1</span>
        </li>
      </ul>
    </div>
  );
}

export default Header
