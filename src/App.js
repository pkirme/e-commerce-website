import { Route } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import ContactUs from "./components/pages/ContactUs";
import CartContextProvider from "./store/CartContext/CartContextProvider";
import HeaderNavbar from "./header/HeaderNavbar";
import Heading from "./header/Heading";

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
        {/* <RouterProvider router={router} /> */}
      </CartContextProvider>
    </>
  );
}

export default App;
