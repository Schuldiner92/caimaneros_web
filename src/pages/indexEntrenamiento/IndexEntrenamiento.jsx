import react from 'react';
import Navbar from '../../components/NavbarEntrenador/Navbar';
import Tarjeta from'../../components/indexEntrenamiento/Tarjeta';

function IndexEntrenamiento() {
    return (
        <div>
            <Navbar/>
            <div style={{display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '85vh',
            }}>
                <Tarjeta/>
            </div> 
        </div>        
    );
  }
  
  export default IndexEntrenamiento;