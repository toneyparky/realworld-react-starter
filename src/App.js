import React from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Header/>
      <Route path="/" component={Home} exact/>
      <Footer/>
    </>
  );
};

export default App;
