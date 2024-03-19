import axios from 'axios';
import React, { useState, useEffect } from 'react';


import Paper from '@mui/material/Paper'; // Moved before TableRow to address sorting warning
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';

export default function AppWebsiteVisits() {
  const [loadedSociete, setLoadedSociete] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/societes');
        const { data } = response;
        setLoadedSociete(data.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Societes</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {loadedSociete.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.Nomsociete}
            </TableCell>
            <TableCell><Button color="secondary">Edit</Button>
<Button variant="outlined" color="error">
  Remove
</Button></TableCell>
          
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Button variant="contained" color="success">
  Insert new societe
</Button>
  </TableContainer>
  );
}
