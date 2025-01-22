import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-olive">
      <Navbar />
      <div className="max-w-7xl w-full px-4">
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
