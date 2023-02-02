import React from "react";
import Hero from "./Hero";
import { Page } from "../../App/Layout/Page";
import Favs from "./Favs";

const Home = () => {
  return (
    <>
      <Page
        title="Velkommen til StringsOnline"
        description="Dit sted for instrumenter"
      />
      <Hero />
      <Favs />
    </>
  );
};

export default Home;
