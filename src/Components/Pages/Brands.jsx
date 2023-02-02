import React from "react";
import { Link } from "react-router-dom";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { MainStyled } from "../../Styles/Styled.Main";
import { Page } from "../App/Layout/Page";

function Brands() {
  const { state: brands } = useGetApiDataFromEndpoint("brands", "items");

  return (
    <>
      <Page
        title="StringsOnline - Brands"
        description="Dit sted for instrumenter"
      />
      <MainStyled>
        <h2>Brands</h2>
        <ul>
          {brands &&
            brands.map((brand, i) => (
              <li key={i}>
                <h3>{brand.title}</h3>
                <Link to={brand.id}>
                  <img
                    src={brand.image_fullpath}
                    alt={brand.title + "s logo"}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </MainStyled>
    </>
  );
}

export default Brands;
