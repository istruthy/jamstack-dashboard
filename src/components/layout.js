import React from 'react';
import { Link } from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider url="https://istruthy-jamstack-dashboard.netlify.com">
      <header>
        <Link to="/">Jamstack App</Link>
      </header>

      <main>{children}</main>
    </IdentityContextProvider>
  );
};

export default Layout;
