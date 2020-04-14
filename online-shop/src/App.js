import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup'
import Shop from './pages/Shop'
import TopMenu from './components/TopMenu';

class App extends React.Component {
  state = {
    items: [],
    logged: false
  }

  addToBasket = (item) => {    
    const items = this.state.items
    items.push(item)
    this.setState( {items} )
  }

  updateLogged = () => {    
    const logged = true
    this.setState({ logged })
  }

  render() {        
    return (
      <div className="App">
        <TopMenu items={this.state.items} logged={this.state.logged}/>
        <Switch>
          <Route exact path='/shop' render={() => { // pass props to the using routes
            return (<Shop addToBasket={this.addToBasket} logged={this.state.logged} />)
          }}/>
          <Route exact path='/' render={() => { // pass props to the using routes
            return (<Signup updateLogged={this.updateLogged} />)
          }}/>
        </Switch>

      </div>
    );
  }
}

export default App;
