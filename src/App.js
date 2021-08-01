import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Details from './components/Details';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Services.css';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Products/>
    <Details/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
