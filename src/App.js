import AboutMe from "./components/AboutMe";
import Appbar from "./components/Appbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-slate-900  text-white">
   <Appbar />
   <Home/>
   <AboutMe />
   <Skills />
   <Work />
   <Contact />
   <Footer/>
   </div>
  );
}

export default App;
