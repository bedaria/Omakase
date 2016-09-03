import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';

class SigninApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }

        this.saveUser = this.saveUser.bind(this);
    }

    saveUser(event) {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.username} onChange={this.saveUser.bind(this)} placeholder="Type username" />
            </form>
        );
    }
}

export default SigninApp;
