import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Provider from './context/myProvider';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import SaleDetails from './pages/SaleDetails';
import Orders from './pages/Orders';
import Admin from './pages/Admin';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login/" component={ Login } />
        <Route exact path="/login/:status" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders/:id" component={ SaleDetails } />
        <Route exact path="/admin/manage" component={ Admin } />
        <Route exact path="/customer/orders" component={ Orders } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </Provider>
  );
}

export default App;
