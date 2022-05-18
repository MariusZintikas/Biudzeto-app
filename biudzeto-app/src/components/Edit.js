import { useState } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useHistory } from 'react-router-dom';

function Edit() {
    const [editedDate, setEditedDate] = useState('');
    const [editedSuma, setEditedSuma] = useState('');
    const [editedPavadinimas, setEditedPavadinimas] = useState('');

    const [editingDate, setEditingDate] = useState(false);
    const [editingSuma, setEditingSuma] = useState(false);
    const [editingPavadinimas, setEditingPavadinimas] = useState(false);

    const history = useHistory();

    const { id } = useParams();

    const { data: earn, error, isPending } = useFetch('http://localhost:8000/earns/' + id);

    const handleSave = (e) => {
        e.preventDefault();

        let date = editingDate ? editedDate : earn.date;
        let suma = editingSuma ? editedSuma : earn.suma;
        let pavadinimas = editingPavadinimas ? editedPavadinimas : earn.pavadinimas;

        const editedEarn = { date, suma, pavadinimas };

        fetch('http://localhost:8000/earns/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedEarn)
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
            {earn && (<form>
                <label>Data:</label>
                <input type="date" value={editingDate ? editedDate : earn.date} onChange={(e) => {
                    setEditingDate(true);
                    setEditedDate(e.target.value);
                }} />

                <label>Suma:</label>
                <input type="number" value={editingSuma ? editedSuma : earn.suma} onChange={(e) => {
                    setEditingSuma(true);
                    setEditedSuma(e.target.value);
                }} />

                <label>Pavadinimas:</label>
                <input type = "text" value={editingPavadinimas ? editedPavadinimas : earn.pavadinimas} onChange={(e) => {
                    setEditingPavadinimas(true);
                    setEditedPavadinimas(e.target.value);
                }}
                    
                />

                <button onClick={handleSave}>Redaguoti</button>
                
                <a className="btn" href="/EarnList.js">
            Sąrašas
          </a>
            </form>)}
        </div>
    );
}

export default Edit;