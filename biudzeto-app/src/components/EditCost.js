import { useState } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useHistory } from 'react-router-dom';

function Edit() {
    const [editedDate, setEditedDate] = useState('');
    const [editedSuma, setEditedSuma] = useState('');
    const [editedPavadinimas, setEditedPavadinimas] = useState('');
    const [editedKategorija, setEditedKategorija] = useState('');

    const [editingDate, setEditingDate] = useState(false);
    const [editingSuma, setEditingSuma] = useState(false);
    const [editingPavadinimas, setEditingPavadinimas] = useState(false);
    const [editingKategorija, setEditingKategorija] = useState(false);

    const history = useHistory();

    const { id } = useParams();

    const { data: cost, error, isPending } = useFetch('http://localhost:8000/costs/' + id);

    const handleSave = (e) => {
        e.preventDefault();

        let date = editingDate ? editedDate : cost.date;
        let suma = editingSuma ? editedSuma : cost.suma;
        let pavadinimas = editingPavadinimas ? editedPavadinimas : cost.pavadinimas;
        let kategorija = editingKategorija ? editedKategorija : cost.kategorija;

        const editedCost = { date, suma, pavadinimas, kategorija };

        fetch('http://localhost:8000/costs/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedCost)
        }).then(() => {
            alert("Sėkmingai redagavote");
            //history.push('/');
        })
    }

    return (
        <div className="edit">
            <h2>Readagavimas - {id}</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {cost && (<form>
                <label>Data:</label>
                <input type="date" value={editingDate ? editedDate : cost.date} onChange={(e) => {
                    setEditingDate(true);
                    setEditedDate(e.target.value);
                }} />

                <label>Suma:</label>
                <input type="number" value={editingSuma ? editedSuma : cost.suma} onChange={(e) => {
                    setEditingSuma(true);
                    setEditedSuma(e.target.value);
                }} />

                <label>Pavadinimas:</label>
                <input type = "text" value={editingPavadinimas ? editedPavadinimas : cost.pavadinimas} onChange={(e) => {
                    setEditingPavadinimas(true);
                    setEditedPavadinimas(e.target.value);
                }}
                    
                />
                <label>Kategorija:</label>
                <input value={editingKategorija ? editedKategorija : cost.kategorija} onChange={(e) => {
                    setEditingKategorija(true);
                    setEditedKategorija(e.target.value);
                }}
                    
                />

                <button onClick={handleSave}>Redaguoti</button>
                
                <a className="btn" href="/CostList.js">
            Sąrašas
          </a>
            </form>)}
        </div>
    );
}

export default Edit;