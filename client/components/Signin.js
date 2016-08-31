import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    saveUser(event) {
        this.setState({username: event.target.value})
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.username} onChange={this.saveUser.bind(this)} />
                <button>Sign In</button>
            </form>
        );
    }
};

export default Signin;