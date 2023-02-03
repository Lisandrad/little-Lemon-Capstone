import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './Components/Nav';
import Router from './Components/Router';
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
