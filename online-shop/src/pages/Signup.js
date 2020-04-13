import React from 'react'
import { TextField, Checkbox, Button } from '@material-ui/core'

class Signup extends React.Component {
    state = {
        name : '',
        email: '',
        accepTerms: false,
        buttonDisabled: true
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value })
        this.updateButton()
    }

    onChangeEMail = (e) => {
        this.setState({ email: e.target.value })
        this.updateButton()
    }

    onChangeTerms = (e) => {
        this.setState({ accepTerms: e.target.checked })
        this.updateButton()
    }

    updateButton = () => {
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const accepTerms = document.getElementById('terms').checked
        if (name.trim() !== '' && email.trim() !== '' && accepTerms) this.setState({ buttonDisabled: false })
        else this.setState({ buttonDisabled: true })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //updateLoggedSection()  
    }

    render() {
        console.log('render Signup', this.state)
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <TextField id='name' label='Name' onChange={this.onChangeName} required/>
                </div>
                <div>
                <TextField id='email' label='eMail' onChange={this.onChangeEMail} required/>
                </div>
                <div>
                    <Checkbox id='terms' color='secondary' onChange={this.onChangeTerms} required/> Accept use terms
                </div>
                <div>
                    <Button variant='contained' color='secondary' disabled={this.state.buttonDisabled}>Signup!</Button>
                </div>
            </form>
        )
    }
}
export default Signup