
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";

import Header from './components/Header/Header'
import CustomCarousel from './components/Carousel/Carousel'
import TittleMessage from './components/TittleMessage/TittleMessage'
import About from './components/Pages/About/About'
import Skills from './components/Pages/Skills/Skills';
import Contact from "./components/Contact/Contact";
import Blog from "./components/Pages/Blog/Blog";
import Project from "./components/Pages/Project/Project";
import Copyright from "./components/Pages/Copyright/Copyright";


function App() {

  return (
    <>
  
          <Header />
          <CustomCarousel />
          <TittleMessage />
          <div>
            <Container className="container-box rounded">
              <Fade left duration={1000}>
                <About />
              </Fade>
            </Container>
          </div>
          
          <div>
           
              <Fade right duration={2000}>
              <Skills />
              </Fade>
            
          </div>
          <Blog />
          <Project />
          <div>
           
              <Fade up duration={1000}>
              <Contact />
              </Fade>
            
          </div>
          <Copyright />
        </>
    
  )
}

export default App
