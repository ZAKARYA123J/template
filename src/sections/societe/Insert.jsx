import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


function Insert() {
  const [Nomsociete, setNomsociete] = useState('');
const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/societes/create', { Nomsociete });
      // Optionally, you can perform some actions after the request is successful
      console.log('Data inserted successfully!');
      navigate('/')
      
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  const handleInputChange = (e) => {
    setNomsociete(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={Nomsociete}
          onChange={handleInputChange}
          placeholder="Enter Nomsociete"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Insert;
