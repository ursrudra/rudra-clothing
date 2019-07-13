import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop/hats" component={HatsPage}/>
        </Switch>
      </Router>
    </div>
  );
}

const HatsPage = () => <h1>HatsPage component</h1>;
export default App;
