import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const router = createBrowserRouter([
  { path: "/About", element: <About /> },
  { path: "/", element: <Home /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
