import React from "react";

import Header from "./components/Header";

import Hero from "./components/Hero";
import About from "./components/About";

import Menu from "./components/Menu";

import PrivateDining from "./components/PrivateDining";

import News from "./components/News";

import Gallery from "./components/Gallery";

import Contact from "./components/Contact";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <About />

        <Menu />

        <PrivateDining />

        <News />

        <Gallery />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
