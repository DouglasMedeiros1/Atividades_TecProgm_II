import React from 'react';
import "../App.css";

const RegisterClients: React.FC = () => {

  function reloadPage(): void {
    window.location.reload();
  }
  return (
    <>
            <br />
            
            <div className='inputsProcess'>
              <h1>Register</h1>

              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Social Name'/>
              <br />
              <label htmlFor="date">Date of Birth</label>
              <input type="date" placeholder='Date of Birth'/>
              <br />
              <h2>Address</h2>
              <input type="text" placeholder='Street'/>
              <input type="text" placeholder='Neighborhood' />
              <input type="text" placeholder='City'/>
              <input type="text" placeholder='State' />
              <input type="text" placeholder='Country' />
              <input type="text" placeholder='Postal Code'/>
              <br />

              <h2>Documents</h2>
              <h4>Passport</h4>
              <input type="text" placeholder='Number'/>
              <input type="text" placeholder='Expiration Date'/>
              <h4>CPF</h4>
              <input type="text" placeholder='Number'/>
              <input type="text" placeholder='Expiration Date'/>
              <h4>RG</h4>
              <input type="text" placeholder='Number'/>
              <input type="text" placeholder='Expiration Date'/>

              <br />
              <h2>Phone Numbers</h2>
              <h4>First Number</h4>
              <input type="text" placeholder='DDD'/>
              <input type="text" placeholder='Phone'/>

              <h4>Second Number</h4>
              <input type="text" placeholder='DDD'/>
              <input type="text" placeholder='Phone'/>

              <h4>Third Number</h4>
              <input type="text" placeholder='DDD'/>
              <input type="text" placeholder='Phone'/>

              <br />
              <h2>Hosted</h2>
                <input id='checkbox' type="checkbox" />
                <br />

              <h4>Accommodation</h4><br />
              <select>
                <option value="">Single Simple</option>
                <option value="">Single Plus</option>
                <option value="">Couple Simple</option>
                <option value="">Family Simple</option>
                <option value="">Family Plus</option>
                <option value="">Family Super</option>
              </select><br />

              
            </div>
            <br />

            <button onClick={() => reloadPage()}>Register</button>
            <br />
            
           </>
  );
};

export default RegisterClients;
export {};
