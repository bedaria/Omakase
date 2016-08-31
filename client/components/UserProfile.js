import React from 'react';

var UserProfile = (props) => {
   props.dishes.forEach(dish => console.log(dish))
   return ( <div>
        <div> User Image: </div>
        <div>Your username is: {props.username} </div>
        You've also voted for:
        <ul>
            {props.dishes.map(dish => {
                return <li>{dish}</li>;
          })}
        </ul>
    </div>)
};

export default UserProfile;