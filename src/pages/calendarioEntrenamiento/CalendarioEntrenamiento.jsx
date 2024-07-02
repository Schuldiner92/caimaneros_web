import react from 'react';
import Navbar from '../../components/NavbarEntrenador/Navbar'; 
import CalendarioEntrenamiento from '../../components/calendarioEntrenamiento/Calendario';

function Calendario() {
    return (
        <div>
            <Navbar/>
            <div style={{display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '88vh',
            }}>
            <CalendarioEntrenamiento/>
            </div> 
        </div>        
    );
  }
  
  export default Calendario;