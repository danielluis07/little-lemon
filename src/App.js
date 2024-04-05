import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import BookingPage from "./pages/BookingPage";
import "./App.css";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Highlights />
              <Testimonials />
              <About />
            </>
          }
        />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
