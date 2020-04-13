import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup'
import Shop from './pages/Shop'
import TopMenu from './components/TopMenu';

class App extends React.Component {
  state = {
    items: []
  }

  addToBasket = () => {
    console.log('a la saca')
    const items = this.state.items
    items.push('algunacosa')
    this.setState( {items} )
  }

  render() {
    return (
      <div className="App">
        <TopMenu items={this.state.items}/>
        <Switch>
          <Route exact path='/'component={Signup} />
          <Route exact path='/shop'component={Shop}/>
        </Switch>

      </div>
    );
  }
}

export default App;
