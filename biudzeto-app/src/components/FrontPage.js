import EarnsForm from "./EarnsForm";
import CostsForm from "./CostsForm";
import Chart from "./Chart";

function FrontPage() {
    return (
    <div className="frontpage " >
    <div>
    <EarnsForm/>
    <CostsForm/>
    </div>
    <div className="Chart">
    <Chart/>
    </div>
    
    </div>  );
}

export default FrontPage;
