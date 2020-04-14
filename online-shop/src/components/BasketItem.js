import React from 'react'
import { Typography, Button } from '@material-ui/core'

function BasketItem(props) {
    const { id, src, title, description, price} = props.item

    const handleIncrement = (e, value) => {
        props.addToBasket(props.item)
    }

    const handleDecrement = (e, value) => {
        props.removeFromBasket(props.item.id)
    }    

    const handleRemove = () => {
        props.removeItem(props.item.id)   
    }

    const disableDecrement = () => {        
        return props.amount <= 1
    }
    
    return (
        <div id={id}>
            <table>
                <tbody>
                    <tr>
                        <td width='50%'><img src={src} alt={title} /></td>
                        <td><Typography variant='h4'>{title}</Typography>
                            <Typography variant='body1'> {description} </Typography>
                            <Typography variant='body2'> {price} €</Typography>
                            <Button id='increment' variant='contained' value='+' color='primary' onClick={handleIncrement} > + </Button> 
                            <Typography variant='caption'> {props.amount} </Typography>
                            <Button id='decrement' variant='contained' value='-' color='primary' onClick={handleDecrement} disabled={disableDecrement()}> - </Button>
                            <Button value='-' color='secondary' onClick={handleRemove} > Remove Item </Button> </td>
                    </tr></tbody></table>
        </div>
    )
}
export default BasketItem