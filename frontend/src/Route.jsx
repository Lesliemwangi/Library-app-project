import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import SignUp from "./pages/Signup";
// import Login from "./pages/Login";
// import BookList from "./components/BookList";
// import BookDetails from "./pages/BookDetails";
// import AboutUs from "./components/AboutUs";
// import Contacts from "./components/Contacts";
// import News from "./components/News";
// import NewsDetails from "./pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    //   {
    //     path: "/login",
    //     element: <Login />,
    //   },
    //   {
    //     path: "/signup",
    //     element: <SignUp />,
    //   },
    //   {
    //     path: "/logout",
    //     element: <Logout />,
    //   },
    //   {
    //     path: "/profile",
    //     element: <Profile />,
    //   },
    //   {
    //     path: "/cart",
    //     element: <Cart />,
    //   },
    //   {
    //     path: "/checkout",
    //     element: <Checkout />,
    //   },
    //   {
    //     path: "/search",
    //     element: <Search />,
    //   },
    //   {
    //     path: "/favorites",
    //     element: <Favorites />,
    //   },
    //   {
    //     path: "books",
    //     element: <BookList />,
    //   },
    //   {
    //     path: "books/:id",
    //     element: <BookDetails />,
    //   },
    //   {
    //     path: "/about",
    //     element: <AboutUs />,
    //   },
    //   {
    //     path: "/news",
    //     element: <News />,
    //   },
    //   {
    //     path: "/news/:id",
    //     element: <NewsDetails />,
    //   },
    //   {
    //     path: "/contacts",
    //     element: <Contacts />,
    //   },
    ],
  },
]);

export { router };

