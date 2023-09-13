//import React
import React from "react";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';
import Landing from './components/Landing';

function App() {
  return (
    <div className="homepage d-flex-column">
      <Header></Header>
      <main class="d-flex justify-content-center"> 
        <Landing></Landing>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
