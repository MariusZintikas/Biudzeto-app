import { useState } from "react";
import { useHistory } from 'react-router-dom';

function EarnsForm() {
  const [date, setDate] = useState(showTodayDate());
  const [suma, setSuma] = useState("");
  const [pavadinimas, setPavadinimas] = useState("");
 
  const history = useHistory();

  function showTodayDate() {
    let date = new Date();
    let today = date.toISOString().slice(0, 10);
    return today;
  }

  function resetForm() {
    setSuma("");
    setPavadinimas("");
  }

  


   const handleSubmit = (e) => {
    e.preventDefault();
    const earn = { date, suma, pavadinimas };

    fetch('http://localhost:8000/earns', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(earn)
    }).then(() => {
        alert('Pajamas įvedėte sėkmingai');
        resetForm();

        // history.push('/');
    })
}

  return (
    <div className="Earns">
          
      <form  onSubmit={handleSubmit}>
      <div><h2>Pajamos</h2>
      <label htmlFor="date"></label>      
          <input 
          id="today"
          className="input" 
          type="date"
           value={date}
            required onChange={(e) => {
              setDate(e.target.value);
            }}
          />
           <label htmlFor="suma"></label>         
          <input className="input" type="number" min="0" max="1000000"
            step="0.01" value={suma}
            placeholder="Įveskite sumą"
            required onChange={(e) => {
              setSuma(e.target.value);
            }}
          />
           <label htmlFor="pavadinimas"></label>         
           <input
            className="input"
            type="text"
            id="pavadinimas"
            value={pavadinimas}
            placeholder="Pavadinimas"
            onChange={(e) => {
              setPavadinimas(e.target.value);
            }}
          />
          </div>
          <div><input type="submit" className="btn" value="Išsaugoti"></input>
        <a className="btn" href="/EarnList.js" >Sąrašas</a></div>
      </form>
            
      </div>
      
  );
}

export default EarnsForm;