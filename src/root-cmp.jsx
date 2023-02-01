import React from "react";
import { Routes, Route } from "react-router";

// import { AppHeader } from "./cmps/app-header";
// import { AppFooter } from "./cmps/app-footer";

import { Home } from "./pages/home";

export function RootCmp() {
  return (
    <div>
      <main className="main-layout">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </main>
    </div>
  );
}
