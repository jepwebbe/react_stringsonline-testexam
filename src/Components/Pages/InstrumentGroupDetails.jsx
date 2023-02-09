import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StyledButtonPink } from "../../Styles/Styled.ButtonPink";
import { MainStyled } from "../../Styles/Styled.Main";
import appService from "../App/Appservices/AppService";
import { Page } from "../App/Layout/Page";
import { RespImg } from "../../Styles/RespImg";
import { StyledInstrumentGroupDetails } from "./Styled.InstrumentGroupDetails";
import { useShoppingCartStore } from "../Partials/ShoppingCart/useShoppingCart/useShoppingCart";
import slugify from "slugify";
import { useUrl } from "../../Hooks/Slug/useUrl";

export const InstrumentGroupDetails = () => {
  const [productData, setProductData] = useState("");
  const [selectedOption, setSelectedOption] = useState("Producent");
  const { increaseCartQuantity } = useShoppingCartStore();
  const { setUrl, url } = useUrl();

  const { id } = useParams();
  const formatPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "symbol",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetFull(url);
        for (const parent of result.data.group.products) {
          parent.slug = slugify(parent.name, {
            strict: true,
            lower: true,
            locale: "da",
          });
        }
        setProductData(result.data.group.products);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [url]);

  return (
    <MainStyled>
      <Page
        title="StringsOnline - Keyboards"
        description="Dit sted for keyboards"
      />
      <StyledInstrumentGroupDetails>
        <div>
          <label htmlFor="producer">
            <select name="producer">
              <option value="Producent">Producent</option>
              {productData &&
                productData.map((producer, ind) => (
                  <option key={ind} value={producer.brand}>
                    {producer.brand}
                  </option>
                ))}
            </select>
          </label>
          <label htmlFor="sorting">Sorter efter...</label>
        </div>

        {productData &&
          productData.map((product, i) => (
            <article key={i}>
              <RespImg
                src={product.image_fullpath}
                alt={"et billede af " + product.name}
              />
              <div>
                <h2>{product.name}</h2>
                <p>
                  {product.description_long.substring(0, 450)}...{" "}
                  <Link onClick={() => setUrl(product.request.url)}
                  to={product.slug}>Læs mere</Link>
                </p>
              </div>
              <div className="stockBox">
                {+product.offerprice > 1 ? (
                  <p>TILBUD {formatPrice.format(product.offerprice)}</p>
                ) : (
                  <p>Pris {formatPrice.format(product.price)}</p>
                )}
                <StyledButtonPink
                  onClick={() =>
                    increaseCartQuantity(
                      product.id,
                      product.price,
                      1,
                      product.name,
                      product.image_fullpath,
                      product.stock

                    )
                  }
                >
                  Læg i kurv
                </StyledButtonPink>
                <p>{product.stock}+ på lager</p>
              </div>
            </article>
          ))}
      </StyledInstrumentGroupDetails>
    </MainStyled>
  );
};
