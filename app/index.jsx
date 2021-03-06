'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HomePage from './components/HomePage.jsx';
import Visualization from './components/Visualization.jsx';
import Prototype from './components/Prototype.jsx';
import Development from './components/Development.jsx';
import { Router, Route, browserHistory } from 'react-router';

import './scss/main.scss';

browserHistory.listen(() => {
    window.scrollTo(0, 0);
})

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={HomePage}/>
        <Route path='/visualizations' component={Visualization}/>
        <Route path='/prototypes' component={Prototype}/>
        <Route path='/development' component={Development}/>
    </Router>,
    document.getElementById('react-app')
);