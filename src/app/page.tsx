import React from "react"; 


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Working from "./components/Working";
import Extension from "./components/Extension";
import Customize from "./components/Customize";
import Work from "./components/Work";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";

export default function Main(){
  return(
    <>
      <Navbar></Navbar>
      <Hero />
      <Project />
      <Working />
      <Extension />
      <Customize />
      <Work />
      <Sponsor />
      <Footer />
    </>
  )
}