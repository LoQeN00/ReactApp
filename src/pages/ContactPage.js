import React, { Component } from 'react'
import { Prompt } from 'react-router-dom' 

import '../styles/ContactPage.css'


class ContactPage extends Component {

    state = {
        value: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className='contact'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea placeholder="Napisz wiadomość ..." onChange={this.handleChange} value={this.state.value}></textarea>
                    <button type='submit'>Wyślij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="Masz niewypełniony formularz, czy napewno chcesz opuścić tą strone"
                />
            </div>
        )
    }
}

export default ContactPage
