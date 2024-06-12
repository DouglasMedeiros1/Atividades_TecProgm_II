import React from 'react';
import "../App.css";

const DeleteClients: React.FC = () => {

  function reloadPage(): void {
    window.location.reload();
  }
  return (
    <>
    
      <div className='inputsProcess'>
        <h1>---Delete---</h1>


        <label>Locate Customer</label>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Date of Birth' />
        <input type="text" placeholder='RG' />

        <br />
        <button onClick={() => reloadPage()}>Delete</button>
        <br />
      </div>
      <br />
    </>
  );
};

export default DeleteClients;
export {};
