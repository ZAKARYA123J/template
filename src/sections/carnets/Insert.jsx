import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function InsertCarnet() {
  const [formData, setFormData] = useState({
    type: '',
    ville: '',
    cosdecarnet: '',
    quantite_minimale: '',
    serie: '',
    first: '',
    last: '',
    remaining_checks: ''
  });
  const [errors, setErrors] = useState(null);
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/carnets', {
        ...formData,
        id_comptes: id // Injecting the id from URL params into the form data
      });
      console.log('Success:', response.data);
      // Reset form data and errors after successful submission
      setFormData({
        type: '',
        ville: '',
        cosdecarnet: '',
        quantite_minimale: '',
        serie: '',
        first: '',
        last: '',
        remaining_checks: ''
      });
      setErrors(null);
    } catch (error) {
      console.error('Error:', error.response.data);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <div>
        {/* {
  "type": "cheque",
  "id_comptes": 1,
  "ville": "Paris",
  "cosdecarnet": "ABC123",
  "quantite_minimale": 3,
  "serie": "XYZ",
  "first": 100,
  "last": 200,
  "remaining_checks": 50
} */}

      <h2>Insert Carnet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type" />
        <input type="text" name="ville" value={formData.ville} onChange={handleChange} placeholder="Ville" />
        <input type="text" name="cosdecarnet" value={formData.cosdecarnet} onChange={handleChange} placeholder="Cosdecarnet" />
        <input type="number" name="quantite_minimale" value={formData.quantite_minimale} onChange={handleChange} placeholder="Quantite Minimale" />
        <input type="text" name="serie" value={formData.serie} onChange={handleChange} placeholder="Serie" />
        <input type="number" name="first" value={formData.first} onChange={handleChange} placeholder="First" />
        <input type="number" name="last" value={formData.last} onChange={handleChange} placeholder="Last" />
        <input type="number" name="remaining_checks" value={formData.remaining_checks} onChange={handleChange} placeholder="Remaining Checks" />
        <button type="submit">Submit</button>
      </form>
      {errors && (
        <div>
          <h3>Validation Errors:</h3>
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default InsertCarnet;
