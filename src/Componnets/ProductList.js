import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { SEARCH_IMG } from "../utils/constants";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    colors: [],
    genders: [],
    types: [],
    prices: [],
  });

  const allColors = ["red", "green", "blue"];
  const allTypes = ["polo", "hoodie", "basic"];
  const allGenders = ["men", "women"];
  const allPrices = [
    { label: "0-250", min: 0, max: 250 },
    { label: "251-450", min: 251, max: 450 },
    { label: "451+", min: 451, max: Infinity },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      const response = await data.json();
      setProducts(response);
      setFilteredProducts(response);
      // console.log('response',response)
    };
    fetchData();
  }, []);

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
  };

  const handleFilterChange = (category, value) => {
    const updatedFilters = { ...filters };
    if (updatedFilters[category].includes(value)) {
      updatedFilters[category] = updatedFilters[category].filter(
        (item) => item !== value
      );
    } else {
      updatedFilters[category].push(value);
    }
    setFilters(updatedFilters);
  };
  const matchesPrice = (price) => {
    if (filters.prices.length === 0) return true; // No price filter applied
    return filters.prices.some((rangeLabel) => {
      const range = allPrices.find((r) => r.label === rangeLabel);
      return price >= range.min && price <= range.max;
    });
  };

  const filterItems = () => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(lowerCaseSearch) ||
        product.color.toLowerCase().includes(lowerCaseSearch) ||
        product.type.toLowerCase().includes(lowerCaseSearch) ||
        product.price.includes(lowerCaseSearch);

      const matchesColor =
        filters.colors.length === 0 ||
        filters.colors.includes(product.color.toLowerCase());

      const matchesType =
        filters.types.length === 0 ||
        filters.types.includes(product.type.toLowerCase());

      const matchesGender =
        filters.genders.length === 0 ||
        filters.genders.includes(product.gender.toLowerCase());

      const matchesPriceRange = matchesPrice(product.price);
      return (
        matchesSearch &&
        matchesColor &&
        matchesType &&
        matchesGender &&
        matchesPriceRange
      );
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterItems();
  }, [filters, searchTerm]);

  return (
    <>
      <diV className="searchContainer container">
        <input
          className="searchinput"
          placeholder="Search for Products..."
          type="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img className="searchImg" src={SEARCH_IMG} onClick={searchitems} />
      </diV>

      <div className="listingContainer container">
        <div className="filterContainer">
          <h4>Colors</h4>
          {allColors.map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                value={color}
                onChange={() => handleFilterChange("colors", color)}
              />
              {color}
            </label>
          ))}
          <h4>Genders</h4>
          {allGenders.map((gender) => (
            <label key={gender}>
              <input
                type="checkbox"
                value={gender}
                onChange={() => handleFilterChange("genders", gender)}
              />
              {gender}
            </label>
          ))}
          <h4>Prices</h4>
          {allPrices.map((priceRange) => (
            <label key={priceRange.label}>
              <input
                type="checkbox"
                value={priceRange.label}
                onChange={() => handleFilterChange("prices", priceRange.label)}
              />
              {priceRange.label}
            </label>
          ))}{" "}
          <h4>Types</h4>
          {allTypes.map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                value={type}
                onChange={() => handleFilterChange("types", type)}
              />
              {type}
            </label>
          ))}
        </div>
        <div className="productContainer">
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
  );
};

export default ProductList;
