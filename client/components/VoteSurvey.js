import React from 'react';
import foodTypes from '../data/dummyFoods';
import users from '../data/dummyUsers';
import FoodSearchBar from './FoodSearchBar';
import LocationSearchBar from './LocationSearchBar';
import RestaurantSearchBar from './RestaurantSearchBar';
import { Button } from 'react-bootstrap';

class VoteSurvey extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            username: props.username
        };

    }

    render() {
        return (
            <div className="vote-survey">
            <div>
                <p> My username: {this.state.username} </p>
                <p> I had the best </p>
                <FoodSearchBar
                    foodPlaceholder={null}
                    handleFoodChoice={this.props.handleFoodChoice}
                />
                <p> in </p>
                <LocationSearchBar
                    cityPlaceholder={null}
                    handleLocationChoice={this.props.handleLocationChoice}
                />
                <p> at </p>
                <RestaurantSearchBar
                    hasLocationChoice={this.props.hasLocationChoice}
                    handleRestaurantChoice={this.props.handleRestaurantChoice}
                />
                <Button bsSize="large" className="main-button" onClick={() => {this.props.handleVote()}}> Vote! </Button>
            </div>
        );
    }
}

export default VoteSurvey;
