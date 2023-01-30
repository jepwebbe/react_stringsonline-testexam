import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"
import useGetApiDataFromEndpoint from "../../../Hooks/useGetApiDataFromEndpoint";

const Search = ({ products, searchResults, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setnoResults] = useState(false);

 // const {state: results} = useGetApiDataFromEndpoint("search", searchTerm)

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // filter allBread array to find items that match searchTerm
    const results = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results)
    results < [0] ? setnoResults(true)  : setnoResults(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Indtast søgeord"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit"><FaArrowRight /></button>
      {noResults  ? <p>Din søgning gav ingen resultater</p> : null}

    </form>
  );
};

export default Search;