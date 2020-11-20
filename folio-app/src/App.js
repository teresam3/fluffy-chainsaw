import React from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Hero from "./components/Hero";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div> 
      <Navbar />
      <Modal/>
      <Hero />

    </div>
  );
}

export default App;
