import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}/>
    </Router>,
    document.getElementById('react-app')
);