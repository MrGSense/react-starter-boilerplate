import React, { Component } from 'react';

class MessageForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            message: ""
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const newMessage = {
            name: this.state.name,
            message: this.state.message
        }

        fetch('/api/messages', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: newMessage.name, message: newMessage.message})
        })
        .catch(err => console.log(err));

        document.querySelector('#name').value = '';
        document.querySelector('#message').value = '';
    }

    render() {
        return (
            <div className="NewMessage">
                <h1>Submit A New Message</h1>
                <form className="MessageForm" onSubmit={this.onSubmit}>
                    <div className="NameInput">
                        <label>Name: </label>
                        <input type="text" name="name" id="name" onChange={this.onChange}></input>
                    </div>
                    <div className="MessageInput">
                        <label>Message: </label>
                        <input type="text" name="message" id="message" onChange={this.onChange}></input>
                    </div>
                    <button className="FormSubmission">Submit</button>
                </form>
            </div>
        )
    }
}

export default MessageForm;
