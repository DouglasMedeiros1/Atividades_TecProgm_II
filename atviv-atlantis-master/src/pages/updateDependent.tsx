import React, { useState } from 'react';
import "../App.css";
import RegisterClients from './registerClients';
import RegisterDependents from './registerDependents';

const UpdateDependent: React.FC = () => {
  const [clients, setClients] = useState(false);

  function alterarState(set: any) {
    set(true)
  }

  function reloadPage(): void {
    window.location.reload();
}

  return (
    <>
           <br />


              <div className='inputsProcess'>
              <h1>---Change Data---</h1>

              <label>Locate Customer</label>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Date of Birth' />
              <input type="text" placeholder='RG' />
              <input type="text" placeholder='Holder' />

              <br />
              <button onClick={() => alterarState(setClients)}>Register New Data</button>
              <br />

              {clients?
              <>
              <RegisterDependents />


              </>  
              :<></>}

            </div>
            <br />
           </>
  );
};

export default UpdateDependent;
export {};
