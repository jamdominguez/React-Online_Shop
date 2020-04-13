import React from 'react'
import items from '../data/items.json'
import { List, ListItem } from '@material-ui/core'

import ShopItem from '../components/ShopItem'

class Shop extends React.Component {
    state = {
        items: []
    }

    componentDidMount = () => {
        this.setState({ items })
    }


    render() {
        console.log('render shop', this.props)
        return (
            <List>                
                    {this.state.items.map((item) => <ListItem key={item.id}> <ShopItem {...item} addToBasket={this.props.addToBasket}/> </ListItem>)}                
            </List>
        )
    }
}
export default Shop