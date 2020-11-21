import React from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Hero from "./components/Hero/Hero";
import Jumbo from "./components/Jumbo";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div> 
      <Navbar />
      <Modal/>
      <Hero />
      <Jumbo />
      <Projects />
      <Footer />
    </div>
  );
}


export default App;

