import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { GridTwo } from "../../Styles/GridTwo";
import { MainStyled } from "../../Styles/Styled.Main";
import { Page } from "../App/Layout/Page";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import Sidebar from "../Partials/Sidebar/Sidebar";

function Brands() {
  const { state: brands } = useGetApiDataFromEndpoint(
    "brands",
    "items"
  );

  return (
    <GridTwo>
      <Page
        title="StringsOnline - Brands"
        description="Dit sted for instrumenter"
      />
      <Header />
      <Sidebar />

      <MainStyled>
        <h2>Brands</h2>
        <ul>
          {brands &&
            brands.map((brand, i) => (
              <li key={i}>
                <h3>{brand.title}</h3>
                <Link to={brand.id}>
                  <img src={brand.image_fullpath} alt={brand.title + "s logo" }/>
                </Link>
              </li>
            ))}
        </ul>
      </MainStyled>
      <Footer />
    </GridTwo>
  );
}

export default Brands;
