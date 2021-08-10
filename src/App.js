import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Signup} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
