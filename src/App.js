import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.component';


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
