import React from 'react'
import {  AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import Basket from './Basket'

class TopMenu extends React.Component {
    handleChange = (event, value) => {        
        this.setState({ value })
        
    }

    render() {                
        return (

            <AppBar position="static" color='default'>
                <Toolbar className='topMenu'>                                
                    <Link to='/' className='topMenu-link'> 
                        <Typography variant="h6" color='secondary'> Signup </Typography>
                    </Link>
                    <Link to='/shop' className='topMenu-link'> 
                        <Typography variant="h6" color='secondary'> Shop </Typography>
                    </Link>
                    <div className='topMenu-fill'/>
                    <Basket color='default' className='basket-div' items={this.props.items} logged={this.props.logged}/>
                </Toolbar>
            </AppBar>            
        )
    }
}
export default TopMenu