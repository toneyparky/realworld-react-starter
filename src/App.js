import React from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Auth from "./pages/Auth";
import Article from "./pages/Article";
import Settings from "./pages/Settings";
import Editor from "./pages/Editor";

const App = () => {
  return (
    <>
      <Header/>
      <Route path="/" component={Home} exact/>
      <Route path="/article" component={Article} exact/>
      <Route path="/editor" component={Editor} exact/>
      <Route path="/settings" component={Settings} exact/>
      <Route path="/auth" component={Auth} exact/>
      <Footer/>
    </>
  );
};

export default App;
