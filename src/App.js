import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import NotFound from "./pages/NotFound";
import CategoryListing from "./pages/CategoryListing";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./containers/Cart";
//import Cart from "./pages/Cart";
//import Checkout from './pages/Checkout';
import Checkout from './containers/Checkout';
import Login  from './containers/LoginSection';
import AuthRoute from './containers/AuthRoute'; 
class App extends Component {
  render() {
    return (
        <Router>
         <div className="container">
         <Header />
         <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/products" exact component={ProductListing} />
            <Route path="/products/:productId" exact component={ProductDetail} />
            <Route path="/products/byCategory/:categoryId" exact component={ProductListing} />
            <Route path="/categories" component={CategoryListing} />
            <Route path="/cart" component={Cart} />
            <AuthRoute path="/checkout" component={Checkout} />
            <Route path="/login" component={Login} />  
            <Redirect path="/" exact to="/home" />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
         </div> 
        </Router>
    );
  }
}

export default App;
