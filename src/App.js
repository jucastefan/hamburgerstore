import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import classes from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartState } from "./context/Context";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Drinks from "./pages/Drinks";

const App = () => {
  const {
    state: { cart },
  } = CartState();

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <main className={classes.App}>
        <Header />
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/menu"}>
            <Menu />
          </Route>
          <Route path={"/cart"}>
            <Cart />
          </Route>
          <Route path={"/drinks"}>
            <Drinks />
          </Route>
          <Redirect to={"/"} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
