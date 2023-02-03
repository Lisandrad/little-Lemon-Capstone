import {useReducer} from 'react';
import {fetchAPI} from '../../../bookingsAPI';
import ReservationForm from '../../Sections/reservePages/BookingForm';
import Heading from '../../Sections/reservePages/Heading';

function Booking() {

  function updateTimes(date) {
    return (
     fetchAPI(date)
    );
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  return (
    <>
     <Heading/>
     <ReservationForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </>
  );
}

export default Booking;