'use strict';

var React = require('react');

var Router = require('react-router');
var {RouteHandler} = Router;

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello, world. Test Two</h1>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
