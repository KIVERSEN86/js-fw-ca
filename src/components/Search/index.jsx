import { useState } from "react";
import { SearchInput } from "../Home/Home.styles";
import PropTypes from "prop-types";

const filterProducts = (searchProducts, products) => {
  return products.filter((product) => product.title.toLowerCase().includes(searchProducts.toLowerCase()));
};

export const SearchBar = ({ products, setFilteredProducts }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    setFilteredProducts(filterProducts(event.target.value, products));
  };

  return <SearchInput value={searchInput} onChange={handleChange} />;
};

SearchBar.propTypes = {
  products: PropTypes.array.isRequired,
  setFilteredProducts: PropTypes.func.isRequired,
};
