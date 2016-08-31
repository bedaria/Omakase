import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import NavBar from './NavBar';
import VoteSurvey from './VoteSurvey';
import UserProfile from './UserProfile';
import users from '../data/dummyUsers';


class VoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'voteSurvey',
            navLink: '#/',
            navMessage: 'Search for Food',
            foodType: null,
            location: null,
            hasLocationChoice: false,
            restaurant: null,
            username: "copper"
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
        console.log('hey')
        var data = {
            "Dish" : {
                "dish_name" : this.state.foodType.label,
                "voteCount": 1
            },
            "Location" : {
                "location_name" : this.state.location.label
            },
            "Restaurant": {
                "restaurant_name": this.state.restaurant.label,
                "address" : "11 DishOneRestaurantAddress",
                "zipcode" : 90025,
                "imageUrl": "www.dishonerestaurant.com"
           }
       }

        axios.post('/api/dish/post', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        if (this.state.foodType && this.state.location && this.state.restaurant) {
            this.setState({page: 'userProfile'});
        } else {
            this.setState({error: true});
        }
    }

    render() {
        if (this.state.page === 'voteSurvey') {
            return (
                <div className="container-fluid">
                    <NavBar navLink={this.state.navLink} navMessage={this.state.navMessage}/>
                    <div className="main-container">
                        <div className="vote-survey-content">
                            {this.state.error && <p className="error-message"> Please complete the voting form! </p>}
                            <VoteSurvey
                                handleFoodChoice={this.handleFoodChoice}
                                handleLocationChoice={this.handleLocationChoice}
                                hasLocationChoice={this.state.hasLocationChoice}
                                handleRestaurantChoice={this.handleRestaurantChoice}
                                handleVote={this.handleVote}
                                username={this.state.username}
                            />
                        </div>
                    </div>
                </div>
            );
        }
        if (this.state.page === 'userProfile') {
            return (
                <div className="container-fluid">
                    <NavBar navLink={this.state.navLink} navMessage={this.state.navMessage}/>
                    <div className="main-container">
                        <div className="main-content">
                            <UserProfile username={this.state.username} dishes={users[this.state.username]}></UserProfile>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default VoteApp;
