import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {

  // 참고: https://github.com/gothinkster/realworld/tree/master/api
  (async () => {
    const response = await fetch("https://conduit.productionready.io/api/articles", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    });
    const content = await response.json();
    console.log(content);
  })();

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
};

export default App;
