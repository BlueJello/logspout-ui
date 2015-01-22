'use strict';

var React = require('react');
var Router = require('react-router');
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

var App = require('./app');
var List = require('./pages/list');

var routes = (
  <Route handler={App} path="/">
    <Route handler={List} path="list" />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
