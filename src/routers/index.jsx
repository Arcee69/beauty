import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import PageLayout from "../layouts";


export default function Routers() {
    return (
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
    );
  }