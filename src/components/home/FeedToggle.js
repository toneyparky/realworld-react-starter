import React from 'react';

function FeedToggle({onReadArticles, onReadMyFeedArticles}) {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item" onClick={() => onReadMyFeedArticles()}>
          <a className="nav-link disabled">Your Feed</a>
        </li>
        <li className="nav-item" onClick={(event) => onReadArticles(event)}>
          <a className="nav-link active">Global Feed</a>
        </li>
      </ul>
    </div>
  );
}

export default FeedToggle;