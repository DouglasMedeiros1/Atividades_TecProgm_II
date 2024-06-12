import React, { useState } from 'react';
import './App.css';

import DeleteDependents from './pages/deleteDepents';
import RegisterClients from './pages/registerClients';
import RegisterDependents from './pages/registerDependents';
import UpdateDependent from './pages/updateDependent';
import ViewClients from './pages/viewClients';
import ViewDependents from './pages/viewDependents';
import UpdateClient from './pages/updateClient';
import DeleteClients from './pages/deleteClients';
import AllocateAccommodation from './pages/aloccateAccommodation';
import ViewAccommodations from './pages/viewAccommodations';

const App: React.FC = () => {
  const [registroCliente, setRegistroCliente] = useState(false);
  const [verCliente, setVerCliente] = useState(false);
  const [alterarCliente, setAlterarCliente] = useState(false);
  const [removerCliente, setRemoverCliente] = useState(false);
  const [registroDependente, setRegistrarDependente] = useState(false);
  const [verDependente, setVerDependente] = useState(false);
  const [alterarDependente, setAlterarDependente] = useState(false);
  const [removerDependente, setRemoverDependente] = useState(false);
  const [acomodarCliente, setAcomodarCliente] = useState(false);
  const [listarAcomodacao, setListarAcomodacao] = useState(false);
  

  function alterarState(set: any) {
    set(true)
  }

  function alterarStateClose(set: any) {
    set(false)
  }


  return (
    <>
    
      <div className='Topbar'>

        <div>
          
          <h1>ATLANTIS</h1>
          <h4>The Best System of Resorts</h4>
          
          <br />
        </div>

        
        <a href="#User"><button>CUSTOMERS</button></a>
        <a href="#Dependent"><button>DEPENDENTS</button></a>
        <a href="#Accommodation"><button>ACCOMMODATION</button></a>

      
      </div>

      <div className='Home' >

        <div className='HomeText'>
          <h3>Welcome to Atlantis Resort! We're thrilled to have you with us and can't wait for you to experience the luxury and relaxation our paradise offers. From our pristine beaches to our world-class amenities, every moment at Atlantis is designed to create unforgettable memories. <br /><hr /> Enjoy your stay and let us make your dream vacation a reality!</h3> 
          
        </div>
      </div>
      

      
      <hr /><br />
      <div id='User' className='Process'>
          <br />

        <h1 >Customer Process</h1>
        {!registroCliente && !alterarCliente && !verCliente && !removerCliente?
        <>
          <button onClick={()=> alterarState(setRegistroCliente)} >Register New Customer</button> 
          <button onClick={()=> alterarState(setVerCliente)} >View Customers</button> 
          <button onClick={()=> alterarState(setAlterarCliente)} >Change Customer Data</button> 
          <button onClick={()=> alterarState(setRemoverCliente)} >Delete Customer</button> 
          </>:
          <>
          </>
        }  

        
        

        <div className='ProcessClient'>

          {registroCliente && !alterarCliente && !verCliente && !removerCliente?
           <>

             <button onClick={()=> alterarStateClose(setRegistroCliente)}><b>CLOSE</b></button>
              <RegisterClients />
              
              <br />
           </>:
           <></>
          }

          {verCliente && !alterarCliente && !removerCliente && !registroCliente? 
           <>
           <br />
            <button onClick={()=> alterarStateClose(setVerCliente)}><b>CLOSE</b></button>


              <ViewClients />
              <br />
           </>:
           <></>
          }

          {alterarCliente && !removerCliente && !verCliente && !registroCliente? 
           <>
           
            <button onClick={()=> alterarStateClose(setAlterarCliente)}><b>CLOSE</b></button>
            <UpdateClient />
            <br />
            <br />
           
           </>:
           <></>
          }

          {removerCliente && !alterarCliente && !verCliente && !alterarCliente? 
           <>
           <br />
            <button onClick={()=> alterarStateClose(setRemoverCliente)}><b>CLOSE</b></button>

              <DeleteClients />
              <br />
            </>:
           <></>
          }
        </div>

        <br /><br />
        </div>



        <br />
        <br />
        <br />
        <div id='Dependent' className='Process'>
          <br />

        <h1>Dependent Process</h1>
        {!registroDependente && !alterarDependente && !verDependente && !removerDependente?
        <>
          <button onClick={()=> alterarState(setRegistrarDependente)} >Register New Dependent</button> 
          <button onClick={()=> alterarState(setVerDependente)} >View Dependents</button> 
          <button onClick={()=> alterarState(setAlterarDependente)} >Change Dependents Data</button> 
          <button onClick={()=> alterarState(setRemoverDependente)} >Delete Dependent</button> 
          </>
          :<></>
        }  

        {registroDependente && !alterarDependente && !verDependente && !removerDependente?
           <> 
           <button onClick={()=> alterarStateClose(setRegistrarDependente)}><b>CLOSE</b></button>
           
           <RegisterDependents />
           <br />
           
           </>
           :<></>
        }

        {verDependente && !alterarDependente && !removerDependente && !registroDependente? 
           <>
           <br />
            <button onClick={()=> alterarStateClose(setVerDependente)}><b>CLOSE</b></button>
            <ViewDependents />
            <br />
           </>
           :<></>
        }


        {alterarDependente && !removerDependente && !verDependente && !registroDependente? 
           <>
           <br />
            <button onClick={()=> alterarStateClose(setAlterarDependente)}><b>CLOSE</b></button>
            
            <UpdateDependent />
            <br />
           </>
           :<></>
        }


        {removerDependente && !alterarDependente && !verDependente && !registroDependente? 
           <>
           <br />
            <button onClick={()=> alterarStateClose(setRemoverDependente)}><b>CLOSE</b></button>
            
              <DeleteDependents />
            <br />
           </>
           :<></>
        }





        </div>

        <br />
        <br />
        <br />
      <div id='Accommodation' className='Process'>

          <br />


        <h1 >Accommodation Process</h1>
        {!acomodarCliente && !listarAcomodacao?
        <>
        <br />
        <button onClick={()=> alterarState(setAcomodarCliente)} >Allocate Customers</button> 
        <button onClick={()=> alterarState(setListarAcomodacao)} >View Accommodations</button> 
        </>
        :<></>
        }

        {acomodarCliente && !listarAcomodacao? 
        <>
        <button onClick={()=> alterarStateClose(setAcomodarCliente)}><b>CLOSE</b></button>
        
        <AllocateAccommodation />
        </>
        :<></>
        }

        {listarAcomodacao && !acomodarCliente? 
        <>
        
        <button onClick={()=> alterarStateClose(setListarAcomodacao)}><b>CLOSE</b></button>
        <ViewAccommodations />
        <br />
        
        
        </>
        :<></>
        }




      </div>
      
      
      
      <div className="container">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <path d="M0,50 C150,100 350,0 500,50 L500,0 L0,0 Z" style={{fill: "aliceblue", fillOpacity: 1}}></path>
        </svg>
      </div>


    </>

  );
}

export default App;
