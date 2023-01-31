import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GridOne } from "../../Styles/GridOne";
import { GridTwo } from "../../Styles/GridTwo";
import { StyledButtonPink } from "../../Styles/Styled.ButtonPink";
import { MainStyled } from "../../Styles/Styled.Main";
import appService from "../App/Appservices/AppService";
import { Page } from "../App/Layout/Page";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import Sidebar from "../Partials/Sidebar/Sidebar";
import { StyledInstrumentGroupDetails } from "./Styled.InstrumentGroupDetails";

export const InstrumentGroupDetails = () => {
  const [productData, setProductData] = useState("");
  const { id } = useParams();
  const formatPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "symbol",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("products/group", id);
        setProductData(result.data.products);
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
      <StyledInstrumentGroupDetails>
        {productData &&
          productData.map((product, i) => (
            <article key={i}>
              <div className="instrumentBox">
                <img
                  src={product.image_fullpath}
                  alt={"et billede af " + product.name}
                />
              </div>
              <div>
                <h2>{product.name}</h2>
                <p>
                  {product.description_long.substring(0, 450)}...{" "}
                  <Link to={product.id}>Læs mere</Link>
                </p>
              </div>
              <div className="stockBox">
                <p>Pris {formatPrice.format(product.price)}</p>
                <StyledButtonPink>Læg i kurv</StyledButtonPink>
                <p>{product.stock}+ på lager</p>
              </div>
            </article>
          ))}
      </StyledInstrumentGroupDetails>
      <Footer />
    </GridTwo>
  );
};
