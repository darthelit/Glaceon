import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PropTypes from 'prop-types';
import createBrowserHistory from 'history/createBrowserHistory';
import Landing from '../containers/LandingPageContainer';
import ViewPokemon from '../containers/ViewPokemonContainer';

const history = createBrowserHistory();

// <Route path={`${match.url}/view/:pokemonId`} component={ViewMon} />
const Home = ({ match }) => (
  <main>
    <Route exact path={match.url} component={Landing} />
    <Route path={`${match.path}/pokemon/:pokemonId`} component={ViewPokemon} />
  </main>
);

Home.propTypes = {
  match: PropTypes.object.isRequired,
};

const App = () => (
  <RecoilRoot>
    <Router history={history}>
      <Route path='/glaceon' component={Home} />
    </Router>
  </RecoilRoot>
);

export default App;
