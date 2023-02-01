import React from "react";
import { Routes, Route } from "react-router";

// import { AppHeader } from "./cmps/app-header";
// import { AppFooter } from "./cmps/app-footer";

import { Home } from "./pages/home";
import './assets/styles/main.scss'

export function RootCmp() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </main>
      {/* // <AppFooter /> */}
      {/* <AppFooter /> */}
    </div>
  );
}
