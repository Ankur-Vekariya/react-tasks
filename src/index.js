import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EditEmployee from "./editEmployee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArrayMethods from "./arrayMethods";
import Todo from "./todo";
import Form from "./form";
import DynamicForm from "./dynamicForm";
import Preview from "./preview";
import Hoc from "./hoc";
import Calculator from "./calc";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit-employee",
    element: <EditEmployee />,
  },
  {
    path: "/array-methods",
    element: <ArrayMethods />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/dynamic-form",
    element: <DynamicForm />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
  {
    path: "/hoc",
    element: <Hoc />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
