import React from 'react';
import { Route } from 'react-router-dom';
import { Auth, AuthRegister, PrivateRoute } from '../../auth/containers';
import { Feed } from '../../feed/containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Auth} />
      <Route exact path="/register" component={AuthRegister} />
      <PrivateRoute exact path="/" component={Feed} />
    </div>
  );
}

export default App;
