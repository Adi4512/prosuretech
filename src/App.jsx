import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {" "}
        <Hero />
        <Services />
      </div>
    </>
  );
}

export default App;
