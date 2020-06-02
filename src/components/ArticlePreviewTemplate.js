import React from 'react';

function ArticlePreviewTemplate(article) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html"><img src={article.author.image}/></a>
        <div className="info">
          <a href="" className="author">{article.author.username}</a>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <a href="/article" className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
}

export default ArticlePreviewTemplate;