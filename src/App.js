import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import LoggedIn from './Home';
// import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/loggedin" component={LoggedIn}/>
            <Route path="/login" component={Login} />
            <Route path="/" component={Signup} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
