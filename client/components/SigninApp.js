import React from 'react';
import { Link } from 'react-router';

class SigninApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }

    handleUserInput(event) {
        this.setState({username: event.target.value});
    }

    handleLink() {
        if(this.state.username.length) {
            return <Link to={'/vote/' + this.state.username}>Signin</Link>
        }
        else {
            return <div> Please input a Username </div>
        }
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.username} onChange={this.handleUserInput.bind(this)} placeholder="Type username" />
                 {this.handleLink()}
            </form>
        );
    }
}

export default SigninApp;
