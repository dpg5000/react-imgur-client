var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
    </Route>
  </Router>
)

//
// parameters = variable in a url from react-router, i.e. :id is a variable
// for an id of 2, inside Topic, this.props will contain an id: "2"