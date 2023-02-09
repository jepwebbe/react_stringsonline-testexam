import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StyledButtonPink } from "../../Styles/Styled.ButtonPink";
import { MainStyled } from "../../Styles/Styled.Main";
import appService from "../App/Appservices/AppService";
import { Page } from "../App/Layout/Page";
import { RespImg } from "../../Styles/RespImg";
import { StyledInstrumentDetails } from "./Styled.InstrumentDetails";
import { useShoppingCartStore } from "../Partials/ShoppingCart/useShoppingCart/useShoppingCart";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { useUrl } from "../../Hooks/Slug/useUrl";

export const InstrumentDetails = () => {
  const [productData, setProductData] = useState("");
  const { url, setUrl } = useUrl();
  const formatPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "symbol",
  });
  const { increaseCartQuantity } = useShoppingCartStore();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetFull(url);
        setProductData(result.data.item);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [url]);
  return (
    <MainStyled>
      <Page
        title={`StringsOnline - ${productData && productData.title}`}
        description="Dit sted for instrumenter"
      />
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
            <Link >
              <img
                src={productData && productData.brand_image}
                alt={"Et billede af" + productData.brand + "s logo"}
              />
            </Link>
          </div>
          {+productData.offerprice > 1 ? (
            <p>TILBUD {formatPrice.format(productData.offerprice)}</p>
          ) : (
            <p>Pris {formatPrice.format(productData.price)}</p>
          )}
          <div className="choose">
            <input type="number" />{" "}
            <StyledButtonPink
              onClick={() =>
                increaseCartQuantity(
                  productData.id,
                  productData.price,
                  1,
                  productData.name,
                  productData.image_fullpath,
                  productData.stock
                )
              }
            >
              Læg i Kurv
            </StyledButtonPink>
          </div>
          <p>{productData && productData.stock}+ på lager</p>
          <div>{productData && productData.rating}</div>
        </div>
      </StyledInstrumentDetails>
    </MainStyled>
  );
};
