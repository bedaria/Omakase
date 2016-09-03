import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class SigninApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userid: null,
            directTo: null
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleValidInput = this.handleValidInput.bind(this);
        this.handleVerification = this.handleVerification.bind(this);
        this.handleLinks = this.handleLinks.bind(this);
    }

    handleUserInput(event) {
        this.setState({username: event.target.value});
    }

    handleValidInput() {
        if(!this.state.username.length)
            return <div> Please input a Username </div>
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

    handleLinks() {
        if(this.state.userid) {
            return (
                <div>
                    <Link to={`/vote/${this.state.userid}`}>Vote</Link>
                    <Link to={'/'}>Home</Link>
                </div>
            )
        }

    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.username} onChange={this.handleUserInput.bind(this)} placeholder="Type username" />
                    <button type="button" onClick={this.handleVerification} > Verify </button>
                </form>
                {this.handleValidInput()}
                {this.handleLinks()}
            </div>
        );
    }
}



export default SigninApp;
