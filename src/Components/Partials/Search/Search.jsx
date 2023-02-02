import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSearchResultsStore } from "./useSearchResultStore";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);
  const { searchResults, setSearchResults } = useSearchResultsStore()
  const navigate = useNavigate();
  // const {state: results} = useGetApiDataFromEndpoint("search", searchTerm)

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.mediehuset.net/stringsonline/search/${searchTerm}`
      );
      const results = await response.json();

      setSearchResults(results);
      results.length === 0 ? setNoResults(true) : setNoResults(false);
    } catch (error) {
      console.error(error);
    }
    navigate("/search")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Indtast søgeord"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">
        <FaArrowRight />
      </button>
      {noResults ? <p>Din søgning gav ingen resultater</p> : null}
    </form>
  );
};

export default Search;
