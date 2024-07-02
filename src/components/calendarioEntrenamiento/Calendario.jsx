import { React, useState } from 'react';
import { Box, Typography, Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '../../import';

const Estilos = {
  Contenedor: {
    textAlign: 'center',
    border: '4px solid #F3DC0AAB',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px auto',
    display: 'inline-block',
    width: '80vw',
  },
  Titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  TituloMes: {
    textAlign: 'center',
    fontWeight: 'bold', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',        
  },
  CalendarioStyle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '5px',
    margin: 'auto',
  },
  NavBotones: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
    alignItems: 'center',
    textDecoration: 'underline', 
    borderBottom: '3px solid transparent',
    cursos:'pointer',
  },
  BotonCalendarioStyle: {
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    fontWeight: 'bold',
    color: 'black',    
    border: '3px solid #F3DC0AAB',
    minWidth: '40px',
    padding: '10px',
    textAlign: 'center',
  },
  NombreDia: {
    fontWeight: 'bold',
    textAlign: 'center',    
  },
  NavBoton: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: 'black',
    borderRadius:'30px',     
  },
  ModalContenedor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    width: '60vw',
    height: '30vw',
    border: '3px solid black',
    borderRadius: '10px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1500,
  },
  ModalTitulo: {
    marginTop: '10px',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    zIndex: 1600,
  },
  ContenedorTabla: {
    backgroundColor: 'white',
    padding: '20px',
    width: '100%',
    maxHeight: '20vh',
    overflowY: 'auto',
  },
  HeaderTabla: {
    fontWeight: 'bold',
    color: 'white',
  },
  FondoOscuro: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1400,
  },
  ContenedorAceptar: {
    display: 'flex',
    justifyContent: 'center'
  },
  BotonAceptar: {
    backgroundColor: '#F3DC0A',
    color: 'white',
    fontWeight: 'bold',
    padding: '5px 20px',
    borderRadius: '20px',
    border: '2px solid black',
    marginTop: '20px',
    cursor: 'pointer',
  },
};

function CalendarButton({ day, date, onClick }) {
  let estiloBoton = { 
    ...Estilos.BotonCalendarioStyle,
    borderColor: '#F3DC0AAB' // Borde amarillo por defecto
  };

  // Verificar si el día de la semana corresponde a Lunes (1), Miércoles (3) o Viernes (5)
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
    estiloBoton.borderColor = '#1e90ff'; // Cambiar color de borde a azul
  }

  return (
    <Button onClick={onClick} style={estiloBoton}>
      {day}
    </Button>
  );
}

function Calendario() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  //Manejar visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trainingData, setTrainingData] = useState([]);


  const month = selectedDate.getMonth();
  const year = selectedDate.getFullYear();

  //Obtener el número de días en el mes
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleDayClick = (day) => {
    console.log(`Haz hecho clic en el día ${day}`);    
    // Construir la clave de fecha con formato 'yyyy-m-d'
    const dateKey = `${year}-${month + 1}-${day}`;  //Formato que deben tener las fechas para ser reconcocidas (AAAA-MM-DD)
    if (trainingDataJson[dateKey]) {
      setTrainingData(trainingDataJson[dateKey]);
      setSelectedDate(new Date(year, month, day)); // Establecer la fecha seleccionada
      setIsModalOpen(true);
    }
  };
  

  //Nombres de los meses en español
  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  //Nombres de los días en español
  const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  //Datos de entrenamiento (Cambiarlos por la api cuando esté hecha)
  const trainingDataJson = {
    "2024-6-7": [
      {
        "entrenador": "Alex",
        "horaInicio": "4:00 pm",
        "horaFinal": "4:00 pm",
        "campoEntrenamiento": "Guimaraitos",
        "tipoEntrenamiento": "Práctico"
      },
      {
        "entrenador": "Alex",
        "horaInicio": "4:30 pm",
        "horaFinal": "4:30 pm",
        "campoEntrenamiento": "Colegio Inem",
        "tipoEntrenamiento": "Práctico"
      },
      {
        "entrenador": "Alex",
        "horaInicio": "6:30 pm",
        "horaFinal": "6:30 pm",
        "campoEntrenamiento": "Colegio Inem",
        "tipoEntrenamiento": "Práctico"
      }
    ],
    "2024-6-14": [
      {
        "entrenador": "Entrenador 2",
        "horaInicio": "3:00 pm",
        "horaFinal": "5:00 pm",
        "campoEntrenamiento": "Guimaraitos",
        "tipoEntrenamiento": "Práctico"
      },
      {
        "entrenador": "Entrenador 2",
        "horaInicio": "5:30 pm",
        "horaFinal": "7:30 pm",
        "campoEntrenamiento": "Colegio Inem",
        "tipoEntrenamiento": "Práctico"
      },      
    ], 
    "2024-6-21": [
      {
        "entrenador": "Entrenador 3",
        "horaInicio": "3:00 pm",
        "horaFinal": "5:00 pm",
        "campoEntrenamiento": "Guimaraitos",
        "tipoEntrenamiento": "Práctico"
      },
      {
        "entrenador": "Entrenador 3",
        "horaInicio": "5:30 pm",
        "horaFinal": "7:30 pm",
        "campoEntrenamiento": "Colegio Inem",
        "tipoEntrenamiento": "Práctico"
      },
      {
        "entrenador": "Entrenador 3",
        "horaInicio": "7:40 pm",
        "horaFinal": "9:30 pm",
        "campoEntrenamiento": "Colegio Inem",
        "tipoEntrenamiento": "Práctico"
      }
    ], 
    "2024-6-28": [
      {
        "entrenador": "Alex",
        "horaInicio": "4:00 pm",
        "horaFinal": "4:00 pm",
        "campoEntrenamiento": "Guimaraitos",
        "tipoEntrenamiento": "Práctico"
      },
      {
        "entrenador": "Alex",
        "horaInicio": "7:40 pm",
        "horaFinal": "9:30 pm",
        "campoEntrenamiento": "Colegio Inem",
        "tipoEntrenamiento": "Práctico"
      }
    ],        
  };
  


  const handlePrevMonth = () => {
    setSelectedDate(new Date(year, month - 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(year, month + 1));
  };

  const handleCurrentMonth = () => {
    setSelectedDate(new Date());
  };

  //Cerrar modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

// Crear la estructura del calendario
const calendarStructure = [];
const firstDayOfMonth = new Date(year, month, 1).getDay();

// Añadir los días vacíos para la primera semana si el mes no empieza en Domingo
for (let i = 0; i < firstDayOfMonth; i++) {
  calendarStructure.push(<Box key={`empty-${i}`} />);
}

// Añadir los días del mes
days.forEach((day) => {
  const date = new Date(year, month, day);
  calendarStructure.push(
    <CalendarButton key={day} day={day} date={date} onClick={() => handleDayClick(day)} />
  );
});


  return (
    <Box>
      <Typography variant="h4" style={Estilos.Titulo}>Calendario de Entrenamientos</Typography>
      <Box style={Estilos.Contenedor}>
        <Box style={Estilos.NavBotones}>
          <Button onClick={handlePrevMonth} style={Estilos.NavBoton}>&lt; {monthNames[(month + 11) % 12]}</Button>
          <Button onClick={handleCurrentMonth} style={Estilos.NavBoton}>VOLVER</Button>
          <Button onClick={handleNextMonth} style={Estilos.NavBoton}>{monthNames[(month + 1) % 12]} &gt;</Button>
        </Box>
        <Box style={{ marginBottom: '30px' }}>
          <Typography variant="h5" style={Estilos.TituloMes}>{monthNames[month]} {year}</Typography>
        </Box>
        <Box style={Estilos.CalendarioStyle}>
          {dayNames.map((dayName) => (
            <Typography variant="h6" key={dayName} style={Estilos.NombreDia}>{dayName}</Typography>
          ))}
          {calendarStructure}
        </Box>
      </Box>
      {isModalOpen && <div style={Estilos.FondoOscuro} />}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        style={Estilos.ModalContenedor}
      >
        <Box>
          <Box>
            <Typography variant="h5" style={Estilos.ModalTitulo}>
              {`${selectedDate.getDate()} / ${selectedDate.getMonth() + 1} / ${selectedDate.getFullYear()}`}
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={Estilos.HeaderTabla}>Entrenador</TableCell>
                  <TableCell style={Estilos.HeaderTabla}>Hora Inicio</TableCell>
                  <TableCell style={Estilos.HeaderTabla}>Hora Final</TableCell>
                  <TableCell style={Estilos.HeaderTabla}>Campo Entrenamiento</TableCell>
                  <TableCell style={Estilos.HeaderTabla}>Tipo Entrenamiento</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </Box>
          <Box style={Estilos.ContenedorTabla}>
            <TableContainer>
              <Table>
                <TableBody>
                  {trainingData.map((data, index) => (
                    <TableRow key={index}>
                      <TableCell>{data.entrenador}</TableCell>
                      <TableCell>{data.horaInicio}</TableCell>
                      <TableCell>{data.horaFinal}</TableCell>
                      <TableCell>{data.campoEntrenamiento}</TableCell>
                      <TableCell>{data.tipoEntrenamiento}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box style={Estilos.ContenedorAceptar}>
            <Button onClick={handleCloseModal} style={Estilos.BotonAceptar}>Aceptar</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default Calendario;
