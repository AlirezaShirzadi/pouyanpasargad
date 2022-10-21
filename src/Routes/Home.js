import React from "react";

import Header from "../Layout/Header";
import Products from "../Layout/Products";
import Quote from "../Layout/Quote";
import Services from "../Layout/Services";
import Partners from "../Layout/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Quote />
      <Services />
      <Partners />
    </>
  );
}
