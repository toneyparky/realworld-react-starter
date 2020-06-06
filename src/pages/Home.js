import React, {useState} from "react";
import Sidebar from "../components/home/Sidebar";
import FeedContainer from "../components/home/FeedContainer";
import Banner from "../components/home/Banner";

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

  const onReadMyFeedArticles = async (event) => {
    const response = await fetch("https://conduit.productionready.io/api/articles/feed", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("token")}`
      },
    });
    const content = await response.json();
    setArticle(content.articles);
  }

  // onReadArticles()

  return (
    <div className="home-page">
      <Banner/>
      <div className="container page">
        <div className="row">
          <FeedContainer articles={article} onReadArticles={onReadArticles}
                         onReadMyFeedArticles={onReadMyFeedArticles}/>
          <Sidebar/>
        </div>
      </div>
    </div>
  )
};

export default Home;
