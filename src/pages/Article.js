import React, {useEffect, useState} from "react";
import ArticleBanner from "../components/article/ArticleBanner";
import ArticleContent from "../components/article/ArticleContent";
import ArticleAction from "../components/article/ArticleAction";
import ArticleCommentContainer from "../components/article/ArticleCommentContainer";

const Article = ({match}) => {
  const [article, setArticle] = useState(null);
  const slug = match.params.slug

  useEffect(() => {
    const loadArticle = async () => {
      const response = await fetch(`https://conduit.productionready.io/api/articles/${slug}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      const article = await response.json()
      setArticle(article["article"])
    }
    loadArticle()
  }, [])


  return (article &&
    <div className="article-page">
      <ArticleBanner article={article}/>
      <div className="container page">
        <ArticleContent article={article}/>
        <hr/>
        <ArticleAction article={article}/>
        <ArticleCommentContainer article={article}/>
      </div>
    </div>
  )
};

export default Article;
