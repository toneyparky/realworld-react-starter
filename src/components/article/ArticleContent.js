import React from 'react';

function ArticleContent({article}) {
  const firstLine = article.body.split(".")[0];
  const restLines = article.body


  return (
    <div className="row article-content">
      <div className="col-md-12">
        <p>
          {article.description}
        </p>
        <h2 id="introducing-ionic">{firstLine}</h2>
        <p>{restLines}</p>
      </div>
    </div>
  );
}

export default ArticleContent;