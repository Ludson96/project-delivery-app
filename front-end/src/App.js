import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import NotFound from './pages/notFound';
import Register from './pages/register';
import Products from './pages/products';
import Checkout from './pages/checkout';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/checkout" component={ Checkout } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
