import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup'
import Shop from './pages/Shop'
import TopMenu from './components/TopMenu';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Switch>
        <Route exact path='/'component={Signup} />
        <Route exact path='/shop'component={Shop} />
      </Switch>

    </div>
  );
}

export default App;
