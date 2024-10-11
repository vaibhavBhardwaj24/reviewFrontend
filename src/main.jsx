import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage.jsx";
import Dashboard from "./components/dashboard.jsx";
import OnePhone from "./components/onePhone.jsx";
import Brand from "./components/brand.jsx";
const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="device/:id" element={<OnePhone />} />
        <Route path="brand/:brand" element={<Brand />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{router}</React.StrictMode>
);
