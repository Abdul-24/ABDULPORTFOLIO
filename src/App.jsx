// import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Navbar from "./components/layout/Navbar";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";



export default function App(){
  return(
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}
