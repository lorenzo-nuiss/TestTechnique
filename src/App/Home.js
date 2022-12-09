
import React from "react";
import { useState, useEffect, useRef } from 'react';
import { showAlert } from './AlertManagement';
import { arrayHour } from './Hour'

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [date, setDate] = useState('');
  const [hour, setHour] = useState('10:00');
  const [show, setShow] = useState('');

  const handleSubmit = () => {
    if (date && hour) {
      fetch("http://localhost:8080/resource/1337/available?datetime=" + date + "T" + hour + ":00Z")
        .then(res => res.json())
        .then(
          (data) => {
            setIsLoaded(true)
            setItems(data)
            console.log(data.available)

            setShow(showAlert(data.available, date, hour))
          }, (error) => {
            setIsLoaded(true)
            console.log("error")
            console.log(error)
            setItems(error)
          }
        )
      return;
    }
  }

  return (
    <div className="App _container">
      <h1>Check resource</h1>

      <input class="form" type="date" id="start" name="trip-start" min="2018-01-01" max="2030-12-31" required onChange={event => setDate(event.target.value)} />


      <select lass="form" id="select" required onChange={event => setHour(event.target.value)}>

        <option value="10:00">10h00</option>
        <option value="10:30">10h30</option>
        <option value="11:00">11h00</option>
        <option value="11:30">11h30</option>
        <option value="12:00">12h00</option>
        <option value="12:30">12h30</option>

        {arrayHour.map(hour => (
          <option value={hour}>{hour}</option>
        ))}

      </select>

      <button class="btn btn-success" onClick={handleSubmit}>Valider</button>

      <div>
        {show}
      </div>
    </div>
  );
}

export default Home;
