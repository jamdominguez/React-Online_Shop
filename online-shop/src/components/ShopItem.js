import React from 'react'
import { Typography, Button } from '@material-ui/core'

function ShopItem(props) {
    const { id, src, title, description, price } = props.item

    const handleClick = () => {
        props.addToBasket(props.item)
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
                            <Button variant='contained' color='secondary' onClick={handleClick} disabled={!props.logged}> Add to the basket</Button> </td>
                    </tr></tbody></table>
        </div>
    )
}
export default ShopItem