import React from 'react';

function ArticleAuthor({article}) {
  return (
    <div className="article-meta">
      <a href=""><img src={article.author.image}/></a>
      <div className="info">
        <a href="" className="author">{article.author.username}</a>
        <span className="date">{article.createdAt}</span>
      </div>
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp;
        Follow {article.author.username} <span className="counter">({article.favoritesCount})</span>
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>
        &nbsp;
        Favorite Post <span className="counter">(29)</span>
      </button>
    </div>
  );
}

export default ArticleAuthor;