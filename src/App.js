import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    
          <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/details/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
          </Switch>
          </Router>
   
  );
}

export default App;
