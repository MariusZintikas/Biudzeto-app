import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AtnaujintiVartotoja() {
  // const navigate = useNavigate();

  const { id } = useParams()

  const [vardas, setVardas] = useState("")
  const [el_pastas, setEl_pastas] = useState("")
  const [slaptazodis, setSlaptazodis] = useState("")
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () => {
    await axios.get(`http://localhost:8000/api/vartotojas/${id}`).then(({data})=>{
      const { vardas, el_pastas, slaptazodis } = data.product
      setVardas(vardas)
      setEl_pastas(el_pastas)
      setSlaptazodis(slaptazodis)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

//   const changeHandler = (event) => {
// 		setImage(event.target.files[0]);
// 	};

  const atnaujintiVartotoja = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('vardas', vardas)
    formData.append('el_pastas', el_pastas)
    formData.append('slaptazodis', slaptazodis)

    await axios.post(`http://localhost:8000/api/products/${id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      // navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Atnaujinti Vartotoją</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={atnaujintiVartotoja}>
                <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Vardas</Form.Label>
                            <Form.Control type="text" value={vardas} onChange={(event)=>{
                              setVardas(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Description">
                            <Form.Label>El_pastas</Form.Label>
                            <Form.Control type="text" value={el_pastas} onChange={(event)=>{
                              setEl_pastas(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Slaptažodis</Form.Label>
                        <Form.Control type="text" value={slaptazodis} onChange={(event)=>{
                              setSlaptazodis(event.target.value)
                            }}/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Atnaujinti
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}