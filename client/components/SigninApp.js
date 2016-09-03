import React from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';

class SigninApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userid: null,
            error: false,
            errorMessage: null,
            previousPage: props.location.pathname
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleValidInput = this.handleValidInput.bind(this);
        this.handleVerification = this.handleVerification.bind(this);
        this.handleRerouting = this.handleRerouting.bind(this);
    }

    handleUserInput(event) {
        this.setState({username: event.target.value});
    }

    handleValidInput() {
        if(!this.state.username.length) {
            return <div> Please input a Username </div>
        }
        else {
            if(this.state.previousPage === '/login-to-vote' || this.state.previousPage === '/login') {
                return <button type="button" onClick={() => this.handleVerification('check')}> Login </button>
            }
            if(this.state.previousPage === '/signup') {
                return <button type="button" onClick={() => this.handleVerification('add')}> Signup </button>
            }
        }
    }

    handleVerification(fn) {
        axios.get('/api/user/' + fn, {
            params: {
              id: 12353623,
              name: this.state.username
            }
          })
            .then(response => {
                if(typeof response.data === 'string') {
                    this.setState({error: true});
                    this.setState({errorMessage: response.data})
                }

                if(typeof response.data === 'object') {
                    this.setState({userid: response.data.FB_id})
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleRerouting() {
        if(this.state.userid) {
            if(this.state.previousPage === '/login-to-vote') {
                {browserHistory.push(`/vote/${this.state.userid}`)}
            }
            else {
                {browserHistory.push('/')}
            }
        }

        if(this.state.error) {
            return <div> {this.state.errorMessage} </div>
        }
    }

    render() {
        if(this.state.previousPage === '/login' || this.state.previousPage === '/login-to-vote') {
            return (
                <div>
                    LOGIN
                    <form>
                        <input type="text" value={this.state.username} onChange={this.handleUserInput} placeholder="Type username" />
                        {this.handleValidInput()}
                    </form>
                    {this.handleRerouting()}
                </div>
            );
        }
        if(this.state.previousPage === '/signup') {
            return (
                <div>
                    WELCOME
                    <form>
                        <input type="text" value={this.state.username} onChange={this.handleUserInput} placeholder="Type username" />
                        <input type="text" placeholder="Type in password" />
                        <input type="text" placeholder="Retype password" />
                        {this.handleValidInput()}
                    </form>
                    {this.handleRerouting()}
                </div>
            );

        }
    }
}



export default SigninApp;
