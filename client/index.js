import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import SearchApp from './components/SearchApp.js';
import VoteApp from './components/VoteApp.js';
import AboutPage from './components/AboutPage.js';
import Signin from './components/Signin.js';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={SearchApp} />
        <Route path="/vote" component={VoteApp} />
        <Route path="/about" component={AboutPage} />
        <Route path="/signin" component={Signin} />
    </Router>
), document.getElementById("app"));
