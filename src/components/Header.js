import React from "react";

const Header = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <a className="navbar-brand" href="/">conduit</a>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/editor">
            <i className="ion-compose"></i>&nbsp;New Post
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/settings">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/auth">Sign up</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
