import React from 'react';
import { Link } from 'react-router';
import VoteSurvey from './VoteSurvey';
import UserProfile from './UserProfile';

class VoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'voteSurvey',
            foodType: null,
            location: null,
            hasLocationChoice: false,
            restaurant: null,
            username: this.props.params.username
        };

        this.handleFoodChoice = this.handleFoodChoice.bind(this);
        this.handleLocationChoice = this.handleLocationChoice.bind(this);
        this.handleRestaurantChoice = this.handleRestaurantChoice.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    handleFoodChoice(choice) {
        this.setState({foodType: choice});
        this.setState({error: false});
    }

    handleLocationChoice(choice) {
        this.setState({location: choice});
        this.setState({hasLocationChoice: true});
        this.setState({error: false});
    }

    handleRestaurantChoice(choice) {
        this.setState({restaurant: choice});
        this.setState({error: false});
    }

    handleVote() {
        if (this.state.foodType && this.state.location && this.state.restaurant) {
            this.setState({page: 'userProfile'});
        } else {
            this.setState({error: true});
        }
    }

    render() {
        console.log("this.props.params: ", this.props.params)
        if (this.state.page === 'voteSurvey') {
            return (
                <div>
                    <img src='./logo.jpg'/>
                    <Link to={'/'}>Search for Food</Link>
                    {this.state.error && <p> Please complete the voting form! </p>}
                    <VoteSurvey
                        handleFoodChoice={this.handleFoodChoice}
                        handleLocationChoice={this.handleLocationChoice}
                        hasLocationChoice={this.state.hasLocationChoice}
                        handleRestaurantChoice={this.handleRestaurantChoice}
                        handleVote={this.handleVote}
                        username={this.state.username}
                    />
                </div>
            );
        }
        if (this.state.page === 'userProfile') {
            return (
                <div>
                    <img src='./logo.jpg'/>
                    <Link to={'/'}>Search for Food</Link>
                    <h1> You voted that {this.state.restaurant.label} has the best {this.state.foodType.label.toLowerCase()} in {this.state.location.label}! </h1>
                    <UserProfile username={this.state.username}></UserProfile>
                </div>
            );
        }
    }
}

export default VoteApp;
