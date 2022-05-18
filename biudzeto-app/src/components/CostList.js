import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Cost from "./Cost";



function CostList() {
  const [costs, setCosts] = useState([]);
  const [fCosts, setFCosts] = useState(null);
  const [filterData, setFilterData] = useState(null);
 // const [pavadinimas, setPavadinimas] = useState("");

  const filterCosts = (e) => {
    e.preventDefault();
    let filteredCosts = costs.filter(cost => cost.pavadinimas===filterData);
    setFCosts(filteredCosts);
  }

  const clearFilter = (e) => {
    e.preventDefault();
    setFCosts(null);
  }
  // const resetForm = (e) => {
  //   e.preventDefault();
       
  //   setPavadinimas("");
  // }

  useEffect(() => {
    fetch("http://localhost:8000/costs")
      .then((res) => res.json())
      .then((data) => setCosts(data));
  }, []);
  return (
    <>
    <form onSubmit={filterCosts} onReset={clearFilter}>
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
      </form>
    <h3>Išlaidų sąrašas</h3>
      <div className="col-md-8">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th width="10%">Eil. Nr.</th>
              <th width="35%">Gavimo data</th>
              <th width="20%">Suma</th>
              <th width="35%">Pavadinimas</th>
              <th width="35%">Kategorija</th>
            </tr>
          </thead>
    
      <tbody>
        {
            (fCosts?fCosts:costs).map((cost, index) => {
                return <Cost key={cost.id} cost={cost} index={index} />;
       
        
        })}

      </tbody>
    </table>
    </div>
    </>
  );
}

export default CostList;