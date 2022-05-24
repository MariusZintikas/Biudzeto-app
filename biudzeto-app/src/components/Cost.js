import {Link} from 'react-router-dom'
//import CostsForm from './CostsForm';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

function Cost({cost, index}) {

    //function deleteCost()
    const handleDelete = () =>  {
        fetch('http://localhost:8000/costs/' + cost.id, {
            method: 'DELETE',
        })
            .then(res => res.json()) 
            alert('Sėkmingai ištrynėte');         
    }

    
return (
    <tr className="sarasas">
            <td>{index + 1}</td>
            <td>{cost.date}</td>
            <td>{cost.suma}</td>
            <td>{cost.pavadinimas}</td>
            <td>{cost.kategorija}</td>
            <td>
              <a href="">
                <i id="siuksliadeze" class="fa fa-trash-o fa-lg"></i>
              </a>
              <button className="btn" onClick={handleDelete}>
                Ištrinti
              </button>
            </td>
            <a href={"/costs/editcost/" + cost.id}>
                <i id="piestukas" class="fa fa-pencil fa-fw"></i>
              </a>
            <td>
              
              
            </td>
          </tr>        
                  
   
);
}

export default Cost;