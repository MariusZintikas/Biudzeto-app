import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function VartotojuSarasas() {

    const [vartotojai, setVartotojai] = useState([])

    useEffect(()=>{
        fetchVartotojai() 
    },[])

    const fetchVartotojai = async () => {
        await axios.get(`http://localhost:8000/api/vartotojas`).then(({data})=>{
            setVartotojai(data)
        })
    }

    const istrintiVartotja = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Ar sutinkate ištrinti?',
            text: "Nebegalėsite gražinti šio įrašo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Taip, ištrinti!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8000/api/vartotojai/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchVartotojai()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/Vartotojai/create"}>
                    Sukurti Vartotoją
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Vardas</th>
                                    <th>El_paštas</th>
                                    <th>Slaptažodis</th>
                                    <th>Veksmai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vartotojai.length > 0 && (
                                        vartotojai.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.vardas}</td>
                                                <td>{row.el_pastas}</td>
                                                <td>{row.slaptazodis}</td>
                                                <td>
                                                    <Link to={`/Vartotojai/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Atnaujinti
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>istrintiVartotja(row.id)}>
                                                        Ištirinti
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}