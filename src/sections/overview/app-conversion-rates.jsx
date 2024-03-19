import PropTypes from 'prop-types';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { fNumber } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function AppConversionRates() {
        const [comptes,setComtes]=useState([])
        useEffect(() => {
          const fetchData = async () => {
            try {
              // Make API request
              const response = await axios.get('http://localhost:8000/api/comptes');
              // Extract data from response
              const { data } = response;
              // Update state with fetched data
              setComtes(data.data);
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
    <h3>les comptes bancaires
    </h3>
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
          {comptes.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.Banque}</TableCell>
              <TableCell align="right">{row.Compte}</TableCell>
              <TableCell align="right">{row.Ville}</TableCell>
              <TableCell align="right">{row.nomsocietes}</TableCell>
              <TableCell align="right"><Button color="secondary">Edit</Button>
<Button variant="outlined" color="error">
  Remove
</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

