import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Application from './application/application';
import AnonymousLayout from './layouts/anonymous';
import AuthenticatedLayout from './layouts/authenticated';
import SignIn from './pages/sign-in';
import SignOut from './pages/sign-out';
import SignUp from './pages/sign-up';
import IndexPage from './pages/index-page';
import NotFound from './pages/notfound';

const router = (<Router history={browserHistory} >
  <Route component={Application}>
    <Route path="/auth" component={AnonymousLayout}>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="signout" component={SignOut} />
    </Route>
    <Route path="/" component={AuthenticatedLayout}>
      <IndexRoute component={IndexPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
</Router>);

ReactDOM.render(router,
document.getElementById('application'));
