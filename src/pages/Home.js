import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import FeedContainer from "../components/FeedContainer";
import Banner from "../components/Banner";

const Home = () => {
  const [article, setArticle] = useState([]);

  const onReadArticles = async () => {
    const response = await fetch("https://conduit.productionready.io/api/articles", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    });
    const content = await response.json();
    setArticle(content.articles);
  }

  onReadArticles()

  return (
    <div className="home-page">
      <Banner/>
      <div className="container page">
        <div className="row">
          <FeedContainer articles={article}/>
          <Sidebar/>
        </div>
      </div>
    </div>
  )
};

export default Home;
