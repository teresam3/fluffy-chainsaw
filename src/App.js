import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal"
import Hero from "./components/Hero/Hero";
import Jumbo from "./components/Jumbo/Jumbo";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div> 
      <Navbar />
      <Modal />
      <Hero />
      <Jumbo />
      <Projects />
      <Footer />
    </div>
  );
}


export default App;
