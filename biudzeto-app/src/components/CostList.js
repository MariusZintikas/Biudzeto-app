import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Cost from "./Cost";



function CostList() {
  const [costs, setCosts] = useState([]);
  const [fCosts, setFCosts] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [sumFCosts, setSumFCosts] = useState();

  const [filteredCost, setFilteredCost] = useState("");
  const [filteredCostSize, setFilteredCostSize] = useState("");
  const [filteredCostsSum, setFilteredCostsSum] = useState("");

  const [updated, setUpdated] = useState(false);

  const filterCosts = (e) => {
    e.preventDefault();
    let filteredCosts = costs.filter(cost => cost.kategorija===filterData);
    setFCosts(filteredCosts);
  }

  const clearFilter = (e) => {
    e.preventDefault();
    setFCosts(null);
  }
  
  useEffect(() => {
    fetch("http://localhost:8000/costs")
      .then((res) => res.json())
      .then((data) => setCosts(data));
  }, [updated]);

  function sumCosts() {
    let costsSum = 0;
    (fCosts ? fCosts : costs).forEach((cost) => {
      costsSum += Number(cost.suma);
    });
    setFilteredCostsSum(costsSum)
  }

  useEffect(()=>{
    sumCosts()
  }, [costs, fCosts])

  return (
    <>
    <form onSubmit={filterCosts} onReset={clearFilter}>
      <input
            className="input"
            type="text"
            id="kategorija"
            
            
            onChange={(e) => {
              setFilterData(e.target.value);
            }}
          />
          <input type="submit" className="btn" value="Filtruoti"></input>
          <input type="reset" className="btn" value="Nuimti filtrą"></input>
          <div>
          <h3 className="isfiltruota">Iš viso išfiltruota suma:</h3>
          <h3>{filteredCostsSum}</h3>
          
        </div>


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
                return (<Cost key={cost.id} cost={cost} index={index} updated={updated}
                setUpdated={setUpdated} />);
       
        
        })}

      </tbody>
    </table>
    </div>
    </>
  );
}

export default CostList;