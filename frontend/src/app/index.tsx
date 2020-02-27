import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Switch, Route } from 'react-router';
import { Home } from 'app/containers/Home';
import { UnauthedRoute } from './components/UnauthedRoute';
import { AuthedRoute } from './components/AuthedRoute';
import { Login } from './containers/Login';


export const App = hot(({ history }: any) => (
  <Router history={history}>
    <Switch>
      <UnauthedRoute path="/login" exact component={Login} />
      {/* <Route path='/test' component={Home} /> */}
      <AuthedRoute path="/" component={Home} />
    </Switch>
  </Router>
));