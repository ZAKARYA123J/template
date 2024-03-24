import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import { IoIosAdd } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
export default function AppWebsiteVisits() {
  const [loadedSocietes, setLoadedSocietes] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/societes');
        const { data } = response;
        setLoadedSocietes(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/societes/delete/${id}`);
      setLoadedSocietes(prevSocietes => prevSocietes.filter(societe => societe.id !== id));
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        window.location.reload();
      }, 3000); // Show the alert for 3 seconds before reloading the page
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Societe</TableCell>
            <TableCell>date de creation</TableCell>
            <TableCell>Create Compte</TableCell>
            <TableCell>Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {loadedSocietes.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.Nomsociete}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.created_at}
              </TableCell>
              <TableCell> 
              <Link to={`/compte/insert/${row.id}`}>
                    <Button color="primary">
                      <IoIosAddCircle fontSize="30px" />
                    </Button>
                  </Link>
                </TableCell>
              <TableCell component="th" scope="row">
                <Button color="secondary">Edit</Button>
                <Button variant="outlined" color="error" onClick={() => handleDelete(row.id)}>Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to={'/cheque/insert'}>
  <Button variant="contained" color="primary">Insert new societe</Button>
</Link>

    </TableContainer>
  );
}
