import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class SigninApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userid: null
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.clickClick = this.clickClick.bind(this);
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

    clickClick() {
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

    render() {
        return (
            <form>
                <input type="text" value={this.state.username} onChange={this.handleUserInput.bind(this)} placeholder="Type username" />
                <button type="button" onClick={this.clickClick} > Click click </button>
                <Link to={`/vote/${this.state.userid}`}>Signin</Link>
            </form>
        );
    }
}



export default SigninApp;
