import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MainStyled } from "../../Styles/Styled.Main";
import appService from "../App/Appservices/AppService";
import { Page } from "../App/Layout/Page";

function BrandsDetails() {
  const [brand, setBrand] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("brands", id);
        setBrand(result.data.item);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);
  console.log(brand.products);
  return (
    <>
    <Page
        title="StringsOnline - Brands"
        description="Dit sted for instrumenter"
      />
      <MainStyled>
        <h2>{brand && brand.title}</h2>
        <img src={brand.image_fullpath} alt={brand.title + "s logo"} />
        <p>{brand && brand.description}</p>
        <ul>
          {brand &&
            brand.products.length > 0 &&
            brand.products.map((product, i) => (
              <li key={i}><Link to={product.id}>{product.name}</Link></li>
            ))}
        </ul>
      </MainStyled>
    </>
  );
}

export default BrandsDetails;
