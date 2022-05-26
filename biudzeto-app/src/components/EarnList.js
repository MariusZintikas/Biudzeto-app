import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Earn from "./Earn";



function EarnList() {
    const [earns, setEarns] = useState([]);
    const [fEarns, setFEarns] = useState(null);
    const [filterData, setFilterData] = useState(null);
    

    const filterEarns = (e) => {
      e.preventDefault();
      let filteredEarns = earns.filter(earn => earn.pavadinimas===filterData);
      setFEarns(filteredEarns);
    }
  
    const clearFilter = (e) => {
      e.preventDefault();
      setFEarns(null);
    }
  
    useEffect(() => {
      fetch("http://localhost:8000/earns")
        .then((res) => res.json())
        .then((data) => setEarns(data));
    }, []);
    return (
      <>
      {/* <form onSubmit={filterEarns} onReset={clearFilter}>
      <input
            className="input"
            type="text"
            id="pavadinimas"
            // value={pavadinimas}
            placeholder="Pavadinimas"
            onChange={(e) => {
              setFilterData(e.target.value);
            }}
          />
          <input type="submit" className="btn" value="Filtruoti"></input>
          <input type="reset" className="btn" value="Valyti"></input>
      </form> */}
      <h3 className="antraste">Pajamų sąrašas</h3>
      <br></br>
      <div className="col-md-8">
      
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th width="10%">Eil. Nr.</th>
            <th width="35%">Gavimo data</th>
            <th width="20%">Suma</th>
            <th width="35%">Pavadinimas</th>
          </tr>
        </thead>

        
      
        <tbody>
          {
              (fEarns?fEarns:earns).map((earn, index) => {
                  return <Earn key={earn.id} earn={earn} index={index} />;
         
          
          })}
  
        </tbody>
      </table>
      </div>
      </>
    );
  }
  
  export default EarnList;