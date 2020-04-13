import React from 'react'
import { TextField, Checkbox, Button } from '@material-ui/core'

class Signup extends React.Component {
    state = {
        name : '',
        email: '',
        accepTerms: false
    }

    render() {
        console.log('render Signup')
        return(
            <form>
                <div>
                <TextField label='Name'></TextField>
                </div>
                <div>
                <TextField label='eMail'></TextField>
                </div>
                <div>
                    <Checkbox color='secondary'/> Accept use terms
                </div>
                <div>
                    <Button variant='contained' color='secondary'>Signup!</Button>
                </div>
            </form>
        )
    }
}
export default Signup