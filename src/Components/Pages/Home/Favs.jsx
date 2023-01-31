import React from "react";
import useGetByIdApiDataFromEndpoint from "../../../Hooks/useGetByIdApiDataFromEndpoint";
import { StyledFavs } from "./Styled.Favs";

const Favs = () => {
  const { state: best } = useGetByIdApiDataFromEndpoint(
    "products/group",
    2,
    "products"
  );

  console.log("best", best);
  return (
    <StyledFavs>
        <h2>Kundernes favoritter</h2>
      {best
        ? best
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 4)
            .map((item, i) => (
              <article key={i}>
                <h2>{item.title}</h2>
                <p>{item.description_short}</p>
                <p>Price: {item.price}</p>
                <p>Rating: {item.rating}</p>
              </article>
            ))
        : null}
    </StyledFavs>
  );
};

export default Favs;
