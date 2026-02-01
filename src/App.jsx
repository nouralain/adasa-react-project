import Home from "./pages/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./pages/blog/Blog";
import About from "./pages/About/About";
import MainLayout from "./layouts/MainLayout";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
