import {Routes, Route} from 'react-router-dom';
import Homepage from '../Components/Pages/HomePage/HomePage';
import About from '../Components/Pages/About/About';
import Reservation from '../Components/Pages/Booking/Booking';
import Order from '../Components/Pages/Order/Order';
import Login from '../Components/Pages/Login/Login';
import Confirmation from '../Components/Pages/Confirmation/Confirmation';


function Routing() {
  return(
    <Routes>
      <Route path="/" element= {
        <Homepage />
       } />

      <Route path="/about" element={
        <About />
      } />

      <Route path="/reservations" element= {
        <Reservation />
      } />

      <Route path="/order" element= {
        <Order />
      } />

      <Route path="/login" element= {
        <Login />
      } />

      <Route path="/confirmation" element= {
        <Confirmation />
      } />
    </Routes>
  );
}

export default Routing;