import React from 'react';

import { NavLink } from 'react-router-dom';
import './Layout.scss';

const links = [
  { name: 'Home', link: '/' },
  { name: 'Create', link: '/create' },
];

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="navbar-wrapper">
        <div className="navbar container">
          <NavLink to="/" className="logo-wrapper">
            <h1 className="logo">Image</h1>
            <p className="logo-text">Bootcamp</p>
          </NavLink>
          <div className="links">
            {links.map((l) => (
              <NavLink
                exact
                to={l.link}
                className="link"
                key={`page-${l.link}`}
                activeClassName="link-active"
              >
                {l.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
