import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
