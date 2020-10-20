import React from 'react';
import { Route } from 'react-router';

const AppRouter = ({ component: Component, layout: Layout, render: Render, ...rest }) => (
  <Route
    {...rest}
    render={ props => (
      <Layout>
        {
          Component !== undefined
          ? <Component {...props} />
          : <Render {...props} />
        }
      </Layout>
    )}
  />
);
export default AppRouter;