import React from 'react';
import FeedToggle from "./FeedToggle";
import ArticlePreviewTemplate from "./ArticlePreviewTemplate";

function FeedContainer({articles, onReadArticles, onReadMyFeedArticles}) {

  const articlePreviewTemplate = articles.map((article) => ArticlePreviewTemplate(article));
  return (
    <div className="col-md-9">
      <FeedToggle onReadArticles={onReadArticles} onReadMyFeedArticles={onReadMyFeedArticles}/>
      {articlePreviewTemplate}
    </div>
  );
}

export default FeedContainer;