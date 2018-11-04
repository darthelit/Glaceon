import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import createBrowserHistory from 'history/createBrowserHistory';
import Landing from '../containers/LandingPageContainer';

const history = createBrowserHistory();

// <Route path={`${match.url}/view/:pokemonId`} component={ViewMon} />
const Home = ({ match }) => (
  <main>
    <Route exact path={match.url} component={Landing} />
  </main>
);

Home.propTypes = {
  match: PropTypes.object.isRequired
};

const App = () => (
  <Router history={history}>
    <Route path='/glaceon' component={Home} />
  </Router>
);

export default App;