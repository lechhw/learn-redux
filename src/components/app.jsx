import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Detail from '../routes/detail';
import Home from '../routes/home';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/:id">
        <Detail />
      </Route>
    </Switch>
  );
};

export default App;
