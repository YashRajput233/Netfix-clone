import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Baneer from "../components/BannerSection/Baneer";
import List from "../components/listofmovies/List";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Baneer />
      <List />
      <Footer />
    </>
  );
}

export default Home;
