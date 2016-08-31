import React from 'react';
import users from '../data/dummyUsers';

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.username,
            dishes: this.props.dishes
        }
    }

    render() {
        if(users[this.state.username]) {
             return ( <div>
                <div> User Image: </div>
                <div>Your username is: {this.props.username} </div>
                You've also voted for:
                <ul>
                    {props.dishes.map(dish => {
                        return <li>{dish}</li>;
                  })}
                </ul>
                </div>)
        }
        else {
            return ( <div>
                <div> User Image: </div>
                <div>Your username is: {this.props.username} </div>
                Congrats on voting for your first dish!
                </div>)
        }
    }
}

export default UserProfile;