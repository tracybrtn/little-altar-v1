//import React
import React from "react";
// import router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import pages
import Home from "./pages/Home";
import Charity from "./pages/Charity";
import Laura from "./pages/Laura";
import Pearl from "./pages/Pearl";
import Error from "./pages/Error";
import End from "./pages/End";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path="/little-altar"
          element={<Home/>}
        />
        <Route 
          path="/charity"
          element={<Charity/>}
        />
        <Route 
          path="/laura"
          element={<Laura/>}
        />
        <Route 
          path="/pearl"
          element={<Pearl/>}
        />
        <Route
          path="/end"
          element={<End/>}
        />
        <Route 
          path="/about"
          element={<About/>}
        />
        <Route
          path="/"
          element={<Home/>}
        />
        <Route 
          path="*" 
          element={<Error/>} 
        />
      </Routes>
      <Footer/>
    </Router>
  )
}


 //const [profileSelected,setProfileSelected] = useState(false);

 /*  //function that checks and renders selected section 
  const renderSection = () => {
    switch (profileSelected) {
      case "landing":
        return <Landing />;
      case "profile":
        return <Profile />;
      case "about":
        return <About />;
      default:
        return <Landing />;
    }
  }; */
export default App;
