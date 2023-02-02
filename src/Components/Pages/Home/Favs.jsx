import React from "react";
import { Link } from "react-router-dom";
import useGetByIdApiDataFromEndpoint from "../../../Hooks/useGetByIdApiDataFromEndpoint";
import { StyledButtonPink } from "../../../Styles/Styled.ButtonPink";
import { RespImg } from "../../../Styles/RespImg";
import { useShoppingCartStore } from "../../Partials/ShoppingCart/useShoppingCart/useShoppingCart";
import { StyledFavs } from "../../../Styles/Styled.Favs";

const Favs = () => {
  const { state: best } = useGetByIdApiDataFromEndpoint(
    "products/group",
    2,
    "products"
  );
  const { increaseCartQuantity } = useShoppingCartStore();

  return (
    <StyledFavs gridArea="main">
      <h2>Kundernes favoritter</h2>
      <div>
        {best
          ? best
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 4)
              .map((item, i) => (
                <article key={i}>
                  
                  <RespImg
                    src={item.image_fullpath}
                    alt={item.filename}
                  />
                  <div>
                    <h2>{item.title}</h2>
                    <p>
                      {item.description_long.substring(0, 230)}{" "}
                      <Link to={"guitarer/2/" + item.id}>Læs mere</Link>
                    </p>
                    <div className="buy">
                      <p className="price">Pris: {item.price}</p>
                      <StyledButtonPink
                        onClick={() =>
                          increaseCartQuantity(
                            item.id,
                            item.price,
                            1,
                            item.title
                          )
                        }
                      >
                        Læg i kurv
                      </StyledButtonPink>
                    </div>
                  </div>
                </article>
              ))
          : null}
      </div>
    </StyledFavs>
  );
};

export default Favs;
