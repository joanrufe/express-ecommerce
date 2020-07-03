const React = require('react');
const { Router, Route, IndexRoute, Redirect, browserHistory } = require('react-router');
const Layout = require('./views/layout.jsx');
const ListPage = require('./views/list.jsx');
const DetailPage = require('./views/detail.jsx');
const Error404 = require('./views/404.jsx');

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={ListPage} />
      <Route path='/user/:id' component={DetailPage} />
      <Redirect from='/gohome' to='/' />
      <Route path='*' component={Error404} />
    </Route>
  </Router>
);