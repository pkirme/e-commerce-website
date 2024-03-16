import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";

const router = createBrowserRouter([
  { path: "/About", element: <About /> },
  { path: "/", element: <Home /> },
  { path: "/Store", element: <Store /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
