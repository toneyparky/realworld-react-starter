import React from 'react';
import ArticleAuthor from "./ArticleAuthor";

function ArticleBanner({article}) {
  return (
    <div className="banner">
      <div className="container">
        <h1>{article.title}</h1>
        <ArticleAuthor article={article}/>
      </div>
    </div>
  );
}

export default ArticleBanner;