import {Link} from 'react-router-dom';
import React from 'react';


function Earn({earn, index}) {

    const handleDelete = () =>  {
        fetch('http://localhost:8000/earns/' + earn.id, {
            method: 'DELETE',
        })
            .then(res => res.json())  
            alert('Sėkmingai ištrynėte');     
    }

return (

    <tr className="sarasas" >
        <td>{index+1}</td>
        <td>{earn.date}</td>
        <td>{earn.suma}</td>
        <td>{earn.kategorija}</td>
        <td>
        <a href="">
                <i id="siuksliadeze" class="fa fa-trash-o fa-lg"></i>
              </a>
        <button className='btn' onClick={handleDelete}>Ištrinti</button>
        </td>
        <td><a href={"/earns/edit/" + earn.id}>
                <i id="piestukas" class="fa fa-pencil fa-fw"></i></a>
              {/* <Link to={'/earns/edit/'+earn.id}><button className='btn'>Redaguoti</button></Link> */}
              </td>
    </tr>
);
}

export default Earn;