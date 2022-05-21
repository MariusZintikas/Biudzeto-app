import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
//import FrontPage from "./components/FrontPage";
import EarnsForm from "./components/EarnsForm";
import EarnList from "./components/EarnList";
import CostList from "./components/CostList";
import Edit from "./components/Edit";
import CostsForm from "./components/CostsForm";
import Vartotojai from "./components/Vartotojai";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />  
      <Footer />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <IntroPage />
          </Route>
          {/* <Route path="/HomePage">
            <HomePage />
          </Route> */}
          <Route path="/LoginForm">
            <LoginForm />
          </Route>
          <Route path="/RegistrationForm">
            <RegistrationForm />
          </Route>
          <Route exact path="/EarnsForm.js">
              <EarnsForm />
              <CostsForm/>
            </Route>
            <Route exact path="/Vartotojai.js">
            <Vartotojai/>
            </Route>
          {/* <Route exact path="/FrontPage">
              
              <FrontPage />
              
            </Route> */}
          <Route exact path="/EarnList.js">
              <EarnList />
            </Route>
            <Route exact path="/CostList.js">
              <CostList />
            </Route>
            <Route path="/earns/edit/:id">
              <Edit />
            </Route>
        </Switch>
      </div>
      {/* <Vartotojai/> */}
      </div>
    </Router>
  );
}

export default App;
