import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import EarnsForm from "./components/EarnsForm";


function App() {
  return (
    <>
   
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
      <div>
      <h1>Pajamos</h1>
        <EarnsForm/>
      </div>
      <footer className="App-footer">
      <Footer/>
      </footer>
    </div>
    </>
  );
}

export default App;
