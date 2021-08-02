import React from 'react';
import Header from './components/Layout/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Details from './components/Details';
import Contact from './components/Contact';
import Footer from './components/Layout/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Header.css';
import './assets/css/Home.css';
import './assets/css/About.css';
import './assets/css/Services.css';
import './assets/css/Products.css';
import './assets/css/Details.css';
import './assets/css/Contact.css';
import './assets/css/Form.css';
import './assets/css/Footer.css';

function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Products/>
    <Details/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
