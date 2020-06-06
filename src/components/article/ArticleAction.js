import React from 'react';
import ArticleAuthor from "./ArticleAuthor";

function ArticleAction({article}) {
  return (
    <div className="article-actions">
      <ArticleAuthor article={article}/>
    </div>
  );
}

export default ArticleAction;