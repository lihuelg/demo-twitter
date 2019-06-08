import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}