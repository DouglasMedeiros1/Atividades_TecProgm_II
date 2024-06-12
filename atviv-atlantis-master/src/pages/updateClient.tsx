import React, { useState } from 'react';
import "../App.css";
import RegisterClients from './registerClients';

const UpdateClient: React.FC = () => {

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

              <br />
              <button onClick={() => alterarState(setClients)}>Register New Data</button>
              <br />

              {clients?
              <>
              <RegisterClients />


              </>  
              :<></>}

            </div>
            <br />
           </>
  );
};

export default UpdateClient;
export {};
