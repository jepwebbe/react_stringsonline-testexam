import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSlug } from "../../Hooks/Slug/useSlug";
import slugify from "slugify";
import { MainStyled } from "../../Styles/Styled.Main";
import appService from "../App/Appservices/AppService";
import { Page } from "../App/Layout/Page";
import { useUrl } from "../../Hooks/Slug/useUrl";

function Brands() {
  const { setSlug, slug } = useSlug();
  const { setUrl } = useUrl();
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetFull("brands");
        for (const parent of result.data.items) {
          parent.slug = slugify(parent.title, {
            strict: true,
            lower: true,
            locale: "da",
          });
        }
        setSlug(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [setSlug]);
  return (
    <>
      <Page
        title="StringsOnline - Brands"
        description="Dit sted for instrumenter"
      />
      <MainStyled>
        <h2>Brands</h2>
        <ul>
          {slug &&
            slug.map((brand, i) => (
              <li key={i}>
                <h3>{brand.title}</h3>
                <Link
                  onClick={() => setUrl(brand.request.url)}
                  to={brand.slug}
                >
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
