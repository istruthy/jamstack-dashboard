import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>This app rules</h1>

    <p>Login to find out why</p>
    <p>
      <Link to="/dashboard">Login</Link>
    </p>
  </Layout>
);
