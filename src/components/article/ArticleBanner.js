import React from 'react';

function ArticleBanner(props) {
  return (
    <div className="banner">
      <div className="container">
        <h1>How to build webapps that scale</h1>
        <div className="article-meta">
          <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
          <div className="info">
            <a href="" className="author">Eric Simons</a>
            <span className="date">January 20th</span>
          </div>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-plus-round"></i>
            &nbsp;
            Follow Eric Simons <span className="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            &nbsp;
            Favorite Post <span className="counter">(29)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleBanner;