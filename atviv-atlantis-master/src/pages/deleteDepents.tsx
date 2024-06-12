import React from 'react';
import "../App.css";

const DeleteDependents: React.FC = () => {

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
        <input type="text" placeholder='Holder' />

        <br />
        <button onClick={() => reloadPage()}>Delete</button>
        <br />
      </div>
      <br />
    </>
  );
};

export default DeleteDependents;
export {};
