import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { Link } from 'react-router-dom'

class TopMenu extends React.Component {
    state = {
        value: 0,
    }

    handleClick = (e) => {        
        console.log(e.target)
        //this.setState(e.taget.value)
    }

    render() {
        console.log(this.state)
        return (
            <AppBar position="static" color='default'>
                <Tabs value={this.state.value} aria-label="simple tabs example">
                    <Link className='topMenu-link' to={`/`} onClick={this.handleClick} value='0'  ><Tab label="Signup" /></Link>
                    <Link className='topMenu-link' to={`/shop`} onClick={this.handleClick} value='1'><Tab label="Shop" /></Link>
                </Tabs>
            </AppBar >
        )
    }
}
export default TopMenu