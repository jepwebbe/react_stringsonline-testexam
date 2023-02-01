import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { GridTwo } from "../../Styles/GridTwo";
import { StyledButtonPink } from "../../Styles/Styled.ButtonPink";
import { MainStyled } from "../../Styles/Styled.Main";
import appService from "../App/Appservices/AppService";
import { Page } from "../App/Layout/Page";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import { RespImg } from "../Partials/RespImg";
import Sidebar from "../Partials/Sidebar/Sidebar";
import { StyledInstrumentDetails } from "./Styled.InstrumentDetails";

export const InstrumentDetails = () => {
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
        const result = await appService.GetDetails("products", id);
        setProductData(result.data.item);
        console.log(result.data.item);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);
  return (
    <GridTwo>
      <Page
        title={`StringsOnline - ${productData && productData.title}`}
        description="Dit sted for instrumenter"
      />
      <Header />
      <Sidebar />
      <StyledInstrumentDetails>
        <div className="gallery">
          {productData &&
            productData.gallery.map((productImg, i) => (

                <RespImg
                key={i}
                  src={productImg.fullpath}
                  alt={productImg.filename}
                />
            ))}
        </div>
        <div>
          <h2>{productData && productData.name}</h2>
          <p>{productData && productData.description_long}</p>
        </div>

        <div>
          <div className="brandlogo">
            <img
              src={productData && productData.brand_image}
              alt={"Et billede af" + productData.brand + "s logo"}
            />
          </div>
          <p>{productData && formatPrice.format(productData.price)}</p>
          <div className="choose">
            <input type="number" />{" "}
            <StyledButtonPink>Læg i Kurv</StyledButtonPink>
          </div>
          <p>{productData && productData.stock}+ på lager</p>
          <div>{productData && productData.rating}</div>
        </div>
      </StyledInstrumentDetails>
      <Footer />
    </GridTwo>
  );
};
