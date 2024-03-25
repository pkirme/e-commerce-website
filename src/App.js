import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import CartContextProvider from "./store/CartContext/CartContextProvider";
import HeaderNavbar from "./components/headers/HeaderNavbar";
import Heading from "./components/headers/Heading";
import Login from "./pages/Login";
import { useContext } from "react";
import AuthContext from "./store/authContext/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);
  const isUserLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      <CartContextProvider>
        <HeaderNavbar />
        <Heading />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>

          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          {isUserLoggedIn && (
            <Route path="/Store">
              <Store />
            </Route>
          )}

          <Route path="/Contact">
            <ContactUs />
          </Route>
          {!isUserLoggedIn && (
            <Route path="/Login">
              <Login />
            </Route>
          )}
        </Switch>
      </CartContextProvider>
    </>
  );
}

export default App;
