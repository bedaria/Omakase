import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import SearchApp from './components/SearchApp.js';
import VoteApp from './components/VoteApp.js';
<<<<<<< 261adb5257c828230bf24d981f6528499a61b848
import AboutPage from './components/AboutPage.js';
=======
import Signin from './components/Signin.js';
>>>>>>> [feature] - adds Signin page, adds Signin page to routes, reroutes SearchApp 'go vote' to signin page

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={SearchApp} />
        <Route path="/vote" component={VoteApp} />
<<<<<<< 261adb5257c828230bf24d981f6528499a61b848
        <Route path="/about" component={AboutPage} />
=======
        <Route path="/signin" component={Signin} />
>>>>>>> [feature] - adds Signin page, adds Signin page to routes, reroutes SearchApp 'go vote' to signin page
    </Router>
), document.getElementById("app"));
