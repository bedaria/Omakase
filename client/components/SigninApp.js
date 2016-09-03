import React from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';

class SigninApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userid: null,
            cameFrom: props.location.pathname
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
            return <button type="button" onClick={this.handleVerification}> Verify </button>
        }
    }

    handleVerification() {
        axios.get('/api/user/add', {
            params: {
              id: 12353623,
              name: "frankie"
            }
          })
            .then(response => {
                this.setState({userid: response.data.FB_id})
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleRerouting() {
        if(this.state.userid) {
            switch (this.state.cameFrom) {
                case '/login-to-vote':
                    {browserHistory.push('/vote')}
                    break;
                default:
                    {browserHistory.push('/')}
            }
        }
    }

    render() {
        if(this.state.cameFrom === '/login' || this.state.cameFrom === '/login-to-vote') {
            return (
                <div>
                    LOGIN
                    <form>
                        <input type="text" value={this.state.username} onChange={this.handleUserInput.bind(this)} placeholder="Type username" />
                        {this.handleValidInput()}
                    </form>
                    {this.handleRerouting()}
                </div>
            );
        }
        if(this.state.cameFrom === '/signup') {
            return (
                <div>
                    WELCOME
                    <form>
                        <input type="text" value={this.state.username} onChange={this.handleUserInput.bind(this)} placeholder="Type username" />
                        <button type="button" onClick={this.handleVerification} > Verify </button>
                    </form>
                    {this.handleValidInput()}
                    {this.handleRerouting()}
                </div>
            );

        }
    }
}



export default SigninApp;
