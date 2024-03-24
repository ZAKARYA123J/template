import React, { useState } from 'react';
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';

export default function InsertCompte() {
    const [Banque, setBanque] = useState('');
    const [Compte, setCompte] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const handleInsertCompte = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        try {
            await axios.post('http://localhost:8000/api/comptes', {
                Banque: Banque,
                Compte: Compte,
                id_societe:id
            });
            // Optionally, you can perform actions after the request is successful
            console.log('Compte inserted successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error inserting compte:', error);
            setError('Error inserting compte. Please try again.');
        }
    };
    

    return (
        <div>
            <h2>Insert Compte</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <form onSubmit={handleInsertCompte}>
                <div>
                    <label htmlFor="banque">Banque:</label>
                    <input type="text" id="banque" value={Banque} onChange={(e) => setBanque(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="compte">Compte:</label>
                    <input type="text" id="compte" value={Compte} onChange={(e) => setCompte(e.target.value)} />
                </div>
                <button type="submit">Insert Compte</button>
            </form>
        </div>
    );
}
