import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import ContactUs from "./components/pages/ContactUs";
import CartContextProvider from "./store/CartContext/CartContextProvider";
import HeaderNavbar from "./components/headers/HeaderNavbar";
import Heading from "./components/headers/Heading";

// const router = createBrowserRouter([
//   { path: "/About", element: <About /> },
//   { path: "/", element: <Home /> },
//   { path: "/Store", element: <Store /> },
// ]);

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
        </Switch>

        {/* <RouterProvider router={router} /> */}
      </CartContextProvider>
    </>
  );
}

export default App;
