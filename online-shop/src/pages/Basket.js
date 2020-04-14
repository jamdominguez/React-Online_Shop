import React from 'react'
import { List, ListItem, Typography } from '@material-ui/core'

import BasketItem from '../components/BasketItem'

class Basket extends React.Component {
    state = {
        items: [],
        elementsToShow: [],
        totalAmount: 0,        
    }

    componentDidMount = () => {        
        this.setState({ items: this.props.items, totalAmount: this.getTotalAmount(this.props.items), elementsToShow: this.elementsToShow(this.props.items)  })
    }

    componentWillReceiveProps = (newProps) => {        
        this.setState({ items: newProps.items, totalAmount: this.getTotalAmount(newProps.items), elementsToShow: this.elementsToShow(newProps.items) })
    }

    getTotalAmount = (items) => {
        let totalAmount = 0
        items.forEach((item) => totalAmount += parseFloat(item.price))
        return totalAmount.toFixed(2)
    }

    getItemAmount = (itemId, items) => {                
        const ids = items.map(item => item.id)
        let count = ids.filter(id => id === itemId).length        
        return count

    }

    getOcurrence = (ids, value) => {
        var count = 0;
        ids.forEach((id) => (id === value && count++));
        return count;
    }

    elementsToShow = (items) => {        
        const elementsToShow = []
        let idsToShow = []        
        items.forEach(item => {            
            idsToShow = elementsToShow.map(i => i.item.id)                  
            if (!(idsToShow.indexOf(item.id) > -1)) elementsToShow.push( {item , amount: this.getItemAmount(item.id, items)})
        })
        return elementsToShow
    }

    render() {
        let key = 0
        return (
            <div>
                <Typography variant='h4' color='secondary' className='totalamount'> Total: {this.state.totalAmount} €</Typography>
                <List>
                    {                    
                    this.state.elementsToShow.map((element) =>
                        <ListItem key={key++}> <BasketItem amount={element.amount} item={element.item} addToBasket={this.props.addToBasket} removeFromBasket={this.props.removeFromBasket} removeItem={this.props.removeItem} /> </ListItem>
                    )}
                </List>
            </div>
        )
    }
}
export default Basket