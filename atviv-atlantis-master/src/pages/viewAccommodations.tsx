import React from 'react';
import "../App.css";

const ViewAccommodations: React.FC = () => {

  function reloadPage(): void {
    window.location.reload();
  }

  return (
      <>
        <br />
        <div className='inputsProcess'>
          <h1>View Accommodations</h1>
          <table id='table'>
                <h4>Options</h4>
                <hr />
                <tr>
                  <th>Name</th>
                  <th>Single Bed</th>
                  <th>Double Bed</th>
                  <th>Suite</th>
                  <th>Air Conditioning</th>
                  <th>Garage</th>
                
                </tr>
                <tr>
                  <td>Single Simple</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>Yes</td>
                  <td>0</td>
                
                </tr>
                <tr>
                  <td>Single Plus</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Yes</td>
                  <td>1</td>
                
                </tr>
                <tr>
                  <td>Couple Simple</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Yes</td>
                  <td>1</td>
                
                </tr>
                <tr>
                  <td>Family Simple</td>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Yes</td>
                  <td>1</td>
                
                </tr>
                <tr>
                  <td>Family Plus</td>
                  <td>5</td>
                  <td>1</td>
                  <td>2</td>
                  <td>Yes</td>
                  <td>2</td>
                
                </tr>
                <tr>
                  <td>Family Super</td>
                  <td>6</td>
                  <td>2</td>
                  <td>3</td>
                  <td>Yes</td>
                  <td>2</td>
                
                </tr>
              </table>

          </div>
        <br />
        </>
        
  );
};

export default ViewAccommodations;
export {};
