import React,{useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import { checkUserSession } from './redux/user/user.action';
const App = ({ checkUserSession,currentUser }) => {

 useEffect(()=>{
   checkUserSession();
 },[checkUserSession])

    
    return (
      <>
          <Header/>
          <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/checkout" component={CheckoutPage}/>
          <Route exact path='/signin' render={()=>currentUser ? <Redirect to="/"/>:<SignInAndSignUpPage/>}/>
          </Switch>
      </>

    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  collectionArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: ()=> dispatch(checkUserSession())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
