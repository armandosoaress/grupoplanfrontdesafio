import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';
import { Visualizar } from './pages/Visualizar';
import { Seach } from './pages/Seach';
import { Editar } from './pages/Editar';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Seach" component={Seach} />
          <Route path="/cadastrar" component={Cadastrar} />
          <Route path="/visualizar/:id" component={Visualizar} />
          <Route path="/editar/:id" component={Editar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
