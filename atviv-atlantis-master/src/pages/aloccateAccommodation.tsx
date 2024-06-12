import React from 'react';
import "../App.css";

const AllocateAccommodation: React.FC = () => {

  function reloadPage(): void {
    window.location.reload();
  }
  return (
    <>
    <br />
    <div className='inputsProcess'>
      <h1>Allocate Accommodation</h1>
      <label>Locate Customer</label>
      <input type="text" placeholder='Name' />
      <input type="text" placeholder='Date of Birth' />
      <input type="text" placeholder='RG' />

      <h4>Accommodation</h4><br />
          <select>
            <option value="">Single Simple</option>
            <option value="">Single Plus</option>
            <option value="">Couple Simple</option>
            <option value="">Family Simple</option>
            <option value="">Family Plus</option>
            <option value="">Family Super</option>
          </select><br />

      <br />
      <button onClick={() => reloadPage()}>Allocate</button>
      <br />
    </div>
    <br />
    </>
  );
};

export default AllocateAccommodation;
export {};
