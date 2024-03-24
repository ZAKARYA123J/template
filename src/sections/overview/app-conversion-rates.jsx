import axios from 'axios';



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';

import Paper from '@mui/material/Paper';
import { IoIosAddCircle } from "react-icons/io";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
// ----------------------------------------------------------------------

export default function AppConversionRates() {
        const [comptes,setComtes]=useState([])
        useEffect(() => {
          const fetchData = async () => {
            try {
              // Make API request
              const response = await axios.get('http://localhost:8000/api/societes');
              // Extract data from response
              const { data } = response;
              // Update state with fetched data
              setComtes(data);
            } catch (error) {
              // Handle errors
              console.log('Error fetching data:', error);
            }
          };
      
          // Call fetchData function when component mounts
          fetchData();
        }, []); 

  return (
    <>
    <h3>les comptes 
    </h3>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Societe</TableCell>
            <TableCell align="right">banque</TableCell>
            <TableCell align="right">Compte</TableCell>
            <TableCell align="right">Create carnet</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                        {comptes.map((societe) => (
                            societe.comptes.map((compte, index) => (
                                <TableRow key={compte.id}>
                                    <TableCell component="th" scope="row">
                                        {compte.id}
                                    </TableCell>
                                    <TableCell align="right">{societe.Nomsociete}</TableCell>
                                    <TableCell align="right">{compte.Banque}</TableCell>
                                    <TableCell align="right">{compte.Compte}</TableCell>
                                    <TableCell sx={{ pl: '40px' }}>
                                      <Link to={`/carnet/insert/${compte.id}`}>
                                        <Button color="primary"><IoIosAddCircle fontSize={30} /></Button>
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button color="secondary">Edit</Button>
                                        <Button variant="outlined" color="error">Remove</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ))}
                    </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

