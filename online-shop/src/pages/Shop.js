import React from 'react'
import logo from './../logo.svg'
import { List, ListItem, Typography } from '@material-ui/core'

class Shop extends React.Component {

    render() {
        console.log('render shop')
        return (
            <List>
                <ListItem>
                    <img src={logo} alt='item' />
                    <Typography variant='h4'>Item title</Typography>
                    <Typography variant='body1'> Item description</Typography>
                    <Typography variant='button'> Add to the basket</Typography>
                </ListItem>
                <ListItem>
                    <img src={logo} alt='item' />
                    <Typography variant='h4'>Item title</Typography>
                    <Typography variant='body1'>Item description</Typography>
                    <Typography variant='button'>Add to the basket</Typography>
                </ListItem>
                <ListItem>
                    <img src={logo} alt='item' />
                    <Typography variant='h4'>Item title</Typography>
                    <Typography variant='body1'>Item description</Typography>
                    <Typography variant='button'>Add to the basket</Typography>
                </ListItem>
                <ListItem>
                    <img src={logo} alt='item' />
                    <Typography variant='h4'>Item title</Typography>
                    <Typography variant='body1'>Item description</Typography>
                    <Typography variant='button'>Add to the basket</Typography>
                </ListItem>
            </List>
        )
    }
}
export default Shop