import About from "./ components/About";
import Contact from "./ components/Contact";
import Home from "./ components/Home";
import Navbar from "./ components/Navbar";
import Skills from "./ components/Skills";
import Work from "./ components/Work";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0a192f]">
      <Navbar />
      <div className="flex flex-col">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
