import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import SearchApp from './components/SearchApp.js';
import VoteApp from './components/VoteApp.js';
import Signin from './components/Signin.js';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={SearchApp} />
        <Route path="/vote/:username" component={VoteApp}/>
        <Route path="/vote" component={VoteApp}/>
        <Route path="/signin" component={Signin} />
    </Router>
), document.getElementById("app"));
