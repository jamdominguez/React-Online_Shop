import React from 'react'
import { Badge, Typography } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'

function Basket(props) {
    const { items, isLogged } = props

    if (isLogged) {
            return(
                <div>
                <Typography variant='inherit' color='secondary'>Logged</Typography>
                
                    <Badge color="secondary" badgeContent={items.length}>
                        <Link className='basket-link' to='/basket'><ShoppingBasketIcon className='basket-icon' /> </Link>
                    </Badge>                    
                
                </div>    
            )        
    }
    return (<div><Typography variant='inherit'> Signup please...</Typography></div>)
}
export default Basket

Basket.defaultProps = {
    items: [],
    isLogged: false
}