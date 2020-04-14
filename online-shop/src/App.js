import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup'
import Shop from './pages/Shop'
import Basket from './pages/Basket'
import TopMenu from './components/TopMenu';

class App extends React.Component {
  state = {
    items: [],
    logged: false
  }

  addToBasket = (item) => {
    const items = this.state.items
    items.push(item)
    this.setState({ items })
  }

  removeFromBasket = (id) => {
    const ids = this.state.items.map(item => item.id)
    const index = ids.indexOf(id)
    if (index > -1) {
      let itemsClone = [...this.state.items]
      itemsClone.splice(index, 1)
      this.setState({ items: itemsClone })
    }
  }

  removeItem = (id) => {
    const items = this.state.items.filter(item => item.id !== id)
    this.setState({ items })
  }

  updateLogged = () => {
    const logged = true
    this.setState({ logged })
  }

  render() {
    return (
      <div className="App">
        <TopMenu items={this.state.items} logged={this.state.logged} />
        <Switch>
          <Route exact path='/basket' render={() => { // pass props to the using routes
            return (<Basket items={this.state.items} addToBasket={this.addToBasket} removeFromBasket={this.removeFromBasket} removeItem={this.removeItem} />)
          }} />
          <Route exact path='/shop' render={() => { // pass props to the using routes
            return (<Shop addToBasket={this.addToBasket} logged={this.state.logged} />)
          }} />
          <Route exact path='/' render={() => { // pass props to the using routes
            return (<Signup updateLogged={this.updateLogged} />)
          }} />
        </Switch>

      </div>
    );
  }
}

export default App;
