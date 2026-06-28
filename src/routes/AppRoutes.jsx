import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Home from "../pages/Home";
import RegionDetails from "../pages/RegionDetails";
import DrinkDetails from "../pages/DrinkDetails";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Franchise from "../pages/Franchise";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-light">

        <Navbar />

        <main className="flex-1">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/regions/:slug"
              element={<RegionDetails />}
            />

            <Route
              path="/drinks/:slug"
              element={<DrinkDetails />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/franchise"
              element={<Franchise />}
            />

          </Routes>

        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}