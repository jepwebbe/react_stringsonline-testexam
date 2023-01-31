import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GridOne } from "../../Styles/GridOne";
import { GridTwo } from "../../Styles/GridTwo";
import { MainStyled } from "../../Styles/Styled.Main";
import appService from "../App/Appservices/AppService";
import { Page } from "../App/Layout/Page";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import Sidebar from "../Partials/Sidebar/Sidebar";
import { StyledInstrumentDetails } from "./Styled.InstrumentDetails";

export const InstrumentDetails = () => {
  const [productData, setProductData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("products/group", id);
        console.log(id);
        setProductData(result.data.products);
        console.log(result.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  return (
    <GridTwo>
      <Page
        title="StringsOnline - Keyboards"
        description="Dit sted for keyboards"
      />
      <Header />
      <Sidebar />
      <StyledInstrumentDetails>
        {productData && productData.map((product, i) => (
          <article key={i}>
            <img src={product.image_fullpath} alt={"et billede af " + product.name} />
            <div>
              <h2>{product.name}</h2>
              <p>{product.description_long.substring(0, 450)}...</p>
            </div>
            <div>
              <p>{product.price}</p>
              <button>Læg i kurv</button>
              <p>{product.stock} på lager</p>
            </div>
          </article>
        ))}
      </StyledInstrumentDetails>
      <Footer />
    </GridTwo>
  );
};
