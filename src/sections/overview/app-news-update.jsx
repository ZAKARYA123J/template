import PropTypes from 'prop-types';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
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
          const response=await axios.get('http://localhost:8000/api/carnets')
          const {data}=response
          setCarnet(data.data)
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
          <TableCell align="right">Banque</TableCell>
          <TableCell align="right">Compte</TableCell>
          <TableCell align="right">Ville</TableCell>
          <TableCell align="right">nomsocietes</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {carnet && carnet.map((row) => (
  <TableRow key={row.id}>
    <TableCell component="th" scope="row">
      {row.id}
    </TableCell>
    <TableCell align="right">{row.type}</TableCell>
    <TableCell align="right">{row.taille}</TableCell>
    <TableCell align="right">{row.created_at}</TableCell>
    <TableCell align="right">{row.nomcompte}</TableCell>
    <TableCell align="right">
      <Button color="secondary">Edit</Button>
      <Button variant="outlined" color="error">Remove</Button>
    </TableCell>
  </TableRow>
))}

      </TableBody>
    </Table>
  </TableContainer>
  <Button>Insert Carnet</Button>
  </>
);
}



// ----------------------------------------------------------------------

