import React, {useState} from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Auth from "./pages/Auth";
import Article from "./pages/Article";
import Settings from "./pages/Settings";
import Editor from "./pages/Editor";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState({})

  return (
    <>
      <Header/>
      <Route path="/" component={Home} exact/>
      <Route path="/article" component={Article} exact/>
      <Route path="/editor" component={Editor} exact/>
      <Route path="/settings" component={Settings} exact/>
      <Route path="/auth" component={Auth} exact/>
      <Route path="/login" component={Login} exact/>
      <Footer/>
    </>
  );
};

export default App;
