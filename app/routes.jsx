import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/GroceryItemList.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="*" exact={1} component={NotFoundPage} />
    </Route>
);