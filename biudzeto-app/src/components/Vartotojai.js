import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import SukurtiVartotoja from "./Vartotojai/create.component";
import AtnaujintiVartotoja from "./Vartotojai/edit.component";
import VartotojuSarasas from "./Vartotojai/list.component";


function Vartotojai() {
    return (<div>
        <Navbar bg="primary">
          <Container>
            <Link to={"/"} className="navbar-brand text-white">
              -PRADINIS-
            </Link>
          </Container>
        </Navbar>
    
        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <div>
                <Link to={"./Vartotojai/create.component"}><SukurtiVartotoja/></Link>
                <Link><AtnaujintiVartotoja/></Link>
                <Link><VartotojuSarasas/></Link>
            </div>
            </Col>
          </Row>
        </Container>
      </div>);
    }

export default Vartotojai;