import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import MoveToTop from "./components/MoveToTop";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#F5F5F5"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Nav />
          <MoveToTop />

          <TransitionGroup className="">
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          <Footer />
        </>
      )}
    </div>
  )
}

export default App
