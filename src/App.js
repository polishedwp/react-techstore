import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Home from "./pages/HomePage";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProductPage";
import Error from "./pages/DefaultPage";

function App() {
  return (
    <Router>
      <main>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={SingleRecipe} />
          <Route component={Error} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
