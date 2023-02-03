import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RespImg } from "../../Styles/RespImg";
import { StyledButtonPink } from "../../Styles/Styled.ButtonPink";
import { Page } from "../App/Layout/Page";
import { useSearchResultsStore } from "../Partials/Search/useSearchResultStore";
import { useShoppingCartStore } from "../Partials/ShoppingCart/useShoppingCart/useShoppingCart";
import { StyledFavs } from "../../Styles/Styled.Favs";

const SearchResults = () => {
  const { searchResults } = useSearchResultsStore();
  const { increaseCartQuantity } = useShoppingCartStore();

  return (
    <StyledFavs gridArea="hero">
      <Page title="StringsOnline - Søgeresultat">
        {searchResults && searchResults.items && searchResults.items.length > 0
          ? searchResults.items.map((item, i) => (
              <article key={i}>
                <RespImg src={item.image_fullpath} alt={item.filename} />
                <div>
                  <h2>{item.title}</h2>
                  <p>
                    {item.description_short}{" "}
                    <Link to={"guitarer/2/" + item.id}>Læs mere</Link>
                  </p>
                  <div className="buy">
                    <p className="price">Pris: {item.price}</p>
                    <StyledButtonPink
                      onClick={() =>
                        increaseCartQuantity(item.id, item.price, 1, item.title)
                      }
                    >
                      Læg i kurv
                    </StyledButtonPink>
                  </div>
                </div>
              </article>
            ))
          : <p>Din søgning gav ingen resultater</p>}
      </Page>
    </StyledFavs>
  );
};

export default SearchResults;
