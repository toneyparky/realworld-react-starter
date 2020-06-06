import React from 'react';
import {Link} from 'react-router-dom';

function ArticlePreviewTemplate({article, index}) {
  return (
    <div className="article-preview" key={index}>
      <div className="article-meta">
        <Link to={"/profiles/" + article.author.username}><img src={article.author.image}/></Link>
        <div className="info">
          <Link to={"/profiles/" + article.author.username} className="author">{article.author.username}</Link>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      {/*<Link to={"/article"} classname="preview-link">   todo 쓰면 깨진다. css가      */}
      {/*  <h1>{article.title}</h1>*/}
      {/*  <p>{article.body}</p>*/}
      {/*  <span>Read more...</span>*/}
      {/*</Link>*/}
      <a href={"/article/" + article.slug} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
}

export default ArticlePreviewTemplate;