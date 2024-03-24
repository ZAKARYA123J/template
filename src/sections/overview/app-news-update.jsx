
import axios from 'axios';
import React,{useState,useEffect} from 'react';

import Button from '@mui/material/Button';
import { IoIosAddCircle } from "react-icons/io";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { fToNow } from 'src/utils/format-time';


// ----------------------------------------------------------------------

export default function AppNewsUpdate() {
  const [carnet,setCarnet]=useState([])
  useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response=await axios.get('http://localhost:8000/api/comptes')
          const {data}=response
          setCarnet(data)
        }catch{
            console.log('error')
        }
      }
      fetchData();
  },[])
  return (
    <>
    <h3>les  Carnets</h3>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell align="right">Type</TableCell>
          <TableCell align="right">Banque</TableCell>
          <TableCell align="right">Compte</TableCell>
          <TableCell align="right">Ville</TableCell>
          <TableCell align="right">N° de carnet</TableCell>
          <TableCell align="right">serie</TableCell>
          <TableCell align="right">debut</TableCell>
          <TableCell align="right">Fin</TableCell>
          <TableCell align="right">Reste</TableCell>
          <TableCell align="right">Position</TableCell>
          <TableCell align="right">Nouveau Cheque</TableCell>
          <TableCell align="right">Supprimer</TableCell>
          {/* "id": 21,
                "type": "za",
                "id_comptes": 21,
                "ville": "zaz",
                "n°_de_carnet": "zaa",
                "quantite_minimale": 21,
                "serie": "12",
                "1er_n°": 32,
                "dernier_n°": 32,
                "remaining_checks": 0,
                "created_at": "2024-03-21 13:11:56" */}
        </TableRow>
      </TableHead>
      <TableBody>
      {carnet && carnet.map((row,index) => (
  <TableRow key={index}>
    <TableCell component="th" scope="row">
      {row.carnets && row.carnets.length > 0 ? row.carnets[0].id : ''}
    </TableCell>
    <TableCell align="right">
      {row.carnets && row.carnets.length > 0 ? row.carnets[0].type : ''}
    </TableCell>
    <TableCell>{row.Banque}</TableCell>
    <TableCell>{row.Compte}</TableCell>
    <TableCell align="right">{row.carnets[0] ? row.carnets[0].ville : ''}</TableCell>
<TableCell align="right">{row.carnets[0] ? row.carnets[0].cosdecarnet : ''}</TableCell>
<TableCell align="right">{row.carnets[0] ? row.carnets[0].serie : ''}</TableCell>
<TableCell align="right">{row.carnets[0] ? row.carnets[0].first : ''}</TableCell>
<TableCell align="right">{row.carnets[0] ? row.carnets[0].last : ''}</TableCell>
<TableCell align="right">{row.carnets[0] ? row.carnets[0].remaining_checks : ''}</TableCell>

    <TableCell align="right">ze</TableCell>
    <TableCell align="right"><Button ><IoIosAddCircle fontSize={30}/></Button></TableCell>



    <TableCell align="right">
      <Button color="secondary">Edit</Button>
      <Button variant="outlined" color="error">Remove</Button>
    </TableCell>
  </TableRow>
))}


      </TableBody>
    </Table>
  </TableContainer>
  </>
);
}



// ----------------------------------------------------------------------

