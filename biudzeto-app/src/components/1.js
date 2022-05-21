// import * as React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.css";

// import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

// import AtnaujintiVartotoja from "./components/Vartotojai/edit.component";
// import VartotojuSarasas from "./components/Vartotojai/list.component";
// import SukurtiVartotoja from "./components/Vartotojai/create.component";

// function Vartotojai() {
//     return (<Router>
//         <Navbar bg="primary">
//           <Container>
//             <Link to={"/"} className="navbar-brand text-white">
//               -PRADINIS-
//             </Link>
//           </Container>
//         </Navbar>
    
//         <Container className="mt-5">
//           <Row>
//             <Col md={12}>
//               <Routes>
//                 <Route path="/Vartotojai/create" element={<SukurtiVartotoja />} />
//                 <Route path="/Vartotojai/edit/:id" element={<AtnaujintiVartotoja />} />
//                 <Route path="/Vartotojai/list" element={<VartotojuSarasas />} />
//               </Routes>
//             </Col>
//           </Row>
//         </Container>
//       </Router>);
//     }

// export default Vartotojai;