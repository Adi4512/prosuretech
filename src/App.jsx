import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {" "}
        <Hero />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
