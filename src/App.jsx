import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Layout */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <Hero />
                <Services />
                <Testimonials />
                <Footer />
              </div>
            </>
          }
        />
        {/* Completely Separate Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
