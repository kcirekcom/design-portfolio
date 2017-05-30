'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={HomePage}/>
        <Route path='/visualizations' component={Visualization}/>
        <Route path='/prototypes' component={Prototype}/>
        <Route path='/development' component={Development}/>
    </Router>,
    document.getElementById('react-app')
);