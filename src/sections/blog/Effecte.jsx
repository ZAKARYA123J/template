import React from 'react';

function Effecte() {
  return (
    <div>
      <form style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '10px', backgroundColor: '#ff4e4e', padding: '5px',height:'100px',width:'200px' , justifyContent: 'center', alignItems: 'center', display: 'flex',color:'white',borderRadius:'6px' }}>EN CIRCULATIONS</div>
        <div style={{ marginRight: '10px', backgroundColor: '#0181ff', padding: '5px',width:'200px', justifyContent: 'center', alignItems: 'center' , display: 'flex',color:"white" ,borderRadius:'6px'}}>ÉCHÉANCIER</div>
        <div style={{ marginRight: '10px', backgroundColor: '#ff8c1b', padding: '5px' ,width:'200px', justifyContent: 'center', alignItems: 'center', display: 'flex',color:'white' ,borderRadius:'6px'}}>ÉCHUS</div>
        <div style={{ backgroundColor: '#009a00', padding: '5px', width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center',color:'white' ,borderRadius:'6px'}}>DÉCAISSÉS</div>
      </form>
    </div>
  );
}

export default Effecte;
