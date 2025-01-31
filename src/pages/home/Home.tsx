import FooterBar from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Project"
import VisitCounter from "../../functions/visitCounter/VisitCounter"

function Home() {

    return (
      <>
        <VisitCounter />
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <FooterBar />
      </>
    )
  }
  
  export default Home