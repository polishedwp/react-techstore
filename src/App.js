import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/Products";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Error from "./pages/DefaultPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          {/* navbar, sidebar, cart,footer*/}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <Route component={Error} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
