import React from 'react';
import users from '../data/dummyUsers';

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        if(users[this.props.username]) {
             return ( <div>
                <div> User Image: </div>
                <div>Your username is: {this.props.username} </div>
                <h1> You voted that {this.props.restaurant} has the best {this.props.foodType} in {this.props.location}! </h1>
                You've also voted for:
                <ul>
                    {users[this.state.username].map(dish => {
                        return <li>{dish}</li>;
                  })}
                </ul>
                </div>)
        }
        else {
            return ( <div>
                <div> User Image: </div>
                <div>Your username is: {this.props.username} </div>
                <h1> You voted that {this.props.restaurant} has the best {this.props.foodType} in {this.props.location}! </h1>
                Congrats on voting for your first dish!
                </div>)
        }
    }
}

export default UserProfile;