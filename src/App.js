import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Home,
  Menu,
  ServicesAndPayments,
  ServicesAndPayments_Category,
} from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:menuId/" element={<Menu />} />
            <Route
              path="/:menuId/:subMenuId/"
              element={<ServicesAndPayments_Category />}
            />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
