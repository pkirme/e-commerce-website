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

function App() {
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

          <Route path="/Store">
            <Store />
          </Route>

          <Route path="/Contact">
            <ContactUs />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>
        </Switch>

        {/* <RouterProvider router={router} /> */}
      </CartContextProvider>
    </>
  );
}

export default App;
