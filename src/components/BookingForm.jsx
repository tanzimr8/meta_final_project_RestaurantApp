import React, { useState } from 'react'

const BookingForm = () => {
    const [formData, setFormData] = useState();
    const [date,setDate] = useState('');
    const [time,setTime] = useState('17:00');
    const [guestNumber,setGuestNumber] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [availableItmes, setAvailableItmes] = useState(['17:00','18:00','19:00','20:00','21:00']);
    const handleSubmit= (e)=>{
        e.preventDefault();
        alert('Your reservation is booked');
        clearForm();
    }
    const clearForm = ()=>{
        setDate('');
        setTime('');
        setGuestNumber(1);
        setOccasion('');
    }
  return (
    <div className='BookingFrom'>
    <form onSubmit={handleSubmit}>
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
        <label for="res-time">Choose time</label>
        <select id="res-time " value={time} onChange={(e)=>{setTime(e.target.value)}}>
            {availableItmes.map((availableItme)=>{
                return <option>{availableItme}</option>
            })}
        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestNumber} onChange={(e)=>{setGuestNumber(e.target.value)}}/>
        <label for="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e)=>{setOccasion(e.target.value)}}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input className='btn-order' type="submit" value="Make Your reservation"/>
    </form>
    </div>
  )
}

export default BookingForm
