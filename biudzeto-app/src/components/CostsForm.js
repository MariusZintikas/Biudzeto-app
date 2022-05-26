import { useState } from "react";
//import { useHistory } from 'react-router-dom';

function CostsForm() {
  const [date, setDate] = useState(showTodayDate());
  const [suma, setSuma] = useState("");
  const [pavadinimas, setPavadinimas] = useState("");
  const [kategorija, setKategorija] = useState("");
  //const history = useHistory();

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
    const cost = { date, suma, pavadinimas, kategorija };

   

    fetch('http://localhost:8000/costs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cost)
    }).then(() => {
        alert('Išlaidas įvedėte sėkmingai');
        resetForm();

        // history.go(-1);
       // history.push('/');
    });
};

  return (
    <div className="Costs">
      <form onSubmit={handleSubmit}>
        <div><h2>Išlaidos</h2>
        <label htmlFor="date"></label>
           <input id="today"
           className="input" type="date" value={date}
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
          <input className="input" 
          type="text"
          id="pavadinimas" value={pavadinimas} placeholder="Pavadinimas"
            onChange={(e) => {
              setPavadinimas(e.target.value);
            }}
          />
        <label htmlFor="kategorija"></label>
          <select className="input2" value={kategorija} onChange={(e) => setKategorija(e.target.value)}>
            <option value="kategorija">Pasirinkite kategoriją</option>
            <option value="maistas">Maistas</option>
            <option value="gerimai">Gėrimai</option>
            <option value="transportas">Transportas</option>
            <option value="pramogos">Pramogos</option>
            <option value="sveikata">Sveikata</option>
            <option value="sportas">Sportas</option>
            <option value="keliones">Kelionės</option>
            <option value="kita">Kita</option>
          </select>
        </div>
        <div><input type="submit" className="btn" value="Išsaugoti"></input>
        <a className="btn" href="/CostList.js">Sąrašas</a></div>
      </form>
      
      </div>
  );
}
export default CostsForm;