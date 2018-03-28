import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Add from '../Add/Add';
import Manage from '../Manage/Manage';
import NotFound from '../Common/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/add' component={Add} />
      <Route exact path='/manage' component={Manage} />
      <Route path ='/' component={NotFound} />
    </Switch>
  </Router>
);

export default App;
