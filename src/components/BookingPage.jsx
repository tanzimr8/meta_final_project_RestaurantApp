import React, { useReducer } from 'react'
import BookingForm from './BookingForm'
const updateTimes = (state, action)=>{
  return state;
}
const BookingPage = () => {
  const initializeTimes  = ['17:00','18:00','19:00','20:00','21:00'];
  const [state, dispatch] = useReducer(updateTimes,initializeTimes);
  
  return (
    <>
      <h2 style={{textAlign:'center'}}>Book a table</h2>
      <BookingForm initializeTimes = {initializeTimes} dispatch = {dispatch}/>
    </>
  )
}

export default BookingPage
