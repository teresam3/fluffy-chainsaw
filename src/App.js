import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal"
import Hero from "./components/Hero/Hero";
import Jumbo from "./components/Jumbo/Jumbo";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Prodal from "./components/Prodal/Prodal";
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
      <Prodal />
      <Footer />
    </div>
  );
}


export default App;

