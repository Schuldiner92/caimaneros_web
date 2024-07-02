import { Box, Grid, Paper, Typography, Button, Table, TableBody, TableCell, TableRow, TableHead} from '../../import';

const Estilos = {
    contenedorPrincipal: {  
        marginTop:'10px',          
        width: '80vw', 
        height:'52vw',
        backgroundColor: '#F3DC0AAB', 
        borderColor:'#1e90ff',
        borderWidth: '5px', 
        borderStyle: 'solid', 
        borderRadius:'25px'           
    },
    subcontenedor:{            
        padding:'5px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'          
    },
    imagen:{      
        position: 'flex',
        width: '200px',
        height: '270px',                     
    },
    paperStyle:{
        marginTop:'25px',
        marginBottom:'25px',
        backgroundColor:'transparent'        
    },    
    logo: {
        width: '80%', 
        height: '80%',        
        borderRadius: '160px',    
        margin: '30px',
    },
    textoLabel:{
        fontWeight: 'bold' 
    },
    textoElemento:{
        color: '#0064be'
    },
    textoDescargas:{ 
        color:"white",
        fontWeight: 'bold',
        marginBottom: '10px'         
    },
    textoJugadores:{ 
        color:"#1b4dcc",
        fontWeight: 'bold',
        marginBottom: '10px', 
        marginTop:'15px'        
    },
    gridItemStyle: {            
        padding:'25px',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'          
    },
    buttonStyle:{
        width:'18vw',
        height:'2.5vw',
        backgroundColor: '#FFFFFF', 
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: '15px',
        borderRadius: '20px'
    },
    contenedorTabla:{        
        maxHeight: '220px', 
        width:'35vw', 
        overflow: 'auto',        
        borderColor: '#F3DC0AAB',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderRadius: '10px',
        marginBottom:'15px'        
    },
        
};

const datosEntrenamiento = { //Esto es temporal, luego debe reemplazarse por el código que consuma el get con los datos de la bd
    "Entrenador a cargo": "ANDRES JAVIER CONTRERAS PEREZ",
    "Lugar de entrenamiento": "SEDE CANCHA INEM",
    "Fecha": "17 /06 / 2024",
    "Horario": "4:00 PM - 5:00 pm",
    "Tipo": "ENTRENAMIENTO PRÁCTICO"
  };
const jugadores = [ //Igualmente temporal, debe reemplarse por los datos de la bd con la api
    {
      "documento": 1098645678,
      "nombre": "Diego Alon",
      "apellido": "Gonzalez Jimenez"
    },
    {
      "documento": 1098765434,
      "nombre": "Maria Zuny",
      "apellido": "Gomez Castro"
    },
    {
      "documento": 1098543212,
      "nombre": "Andres Eduardo",      
      "apellido": "Abril Soto"
    },
    {
        "documento": 1098541122,
        "nombre": "jugador cuatro",      
        "apellido": "apellido1 apellido2"
    }
];

const Tarjeta = () => {
    return (
        <Box sx={Estilos.contenedorPrincipal}>
            <Grid container spacing={0} style={Estilos.subcontenedor}>                    
                <Grid item xs={3} sm={3} md={3} >
                    <Paper elevation={0} sx={Estilos.paperStyle}>
                        <img src={'/navbar/logo-caimaneros.png'} alt="Logo Caimaneros" style={Estilos.logo} />                                             
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={6} >
                    <Paper elevation={0}sx={Estilos.paperStyle}>
                        <Typography variant="subtitle1">
                            <span style={Estilos.textoLabel}>Entrenador a cargo:  </span> 
                            <span style={Estilos.textoElemento}>{datosEntrenamiento["Entrenador a cargo"]}</span>
                            <p></p>
                        </Typography>
                        <Typography variant="subtitle1">
                            <span style={Estilos.textoLabel}>Lugar de entrenamiento:  </span> 
                            <span style={Estilos.textoElemento}>{datosEntrenamiento["Lugar de entrenamiento"]}</span>
                            <p></p>
                        </Typography>
                        <Typography variant="subtitle1">
                            <span style={Estilos.textoLabel}>Fecha:  </span> 
                            <span style={Estilos.textoElemento}>{datosEntrenamiento["Fecha"]}</span>
                            <p></p>
                        </Typography>
                        <Typography variant="subtitle1">
                            <span style={Estilos.textoLabel}>Horario:  </span> 
                            <span style={Estilos.textoElemento}>{datosEntrenamiento["Horario"]}</span>
                            <p></p>
                        </Typography>
                        <Typography variant="subtitle1">
                            <span style={Estilos.textoLabel}>Tipo:  </span> 
                            <span style={Estilos.textoElemento}>{datosEntrenamiento["Tipo"]}</span>
                            <p></p>
                        </Typography>                       
                    </Paper>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Paper elevation={0} sx={Estilos.paperStyle}>
                        <img src={'placeholder-entrenador.jpg'} alt="Imagen entrenador" style={Estilos.imagen} />                        
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={0} sx={Estilos.subcontenedor}>                    
                <Grid item xs={4} sm={4} md={4} sx={Estilos.gridItemStyle}>
                    <Typography variant="h6" component="div" sx={Estilos.textoDescargas}>
                        DESCARGABLES
                    </Typography>
                    <Button variant="contained" sx={Estilos.buttonStyle}>
                        Lista de Jugadores
                    </Button>
                    <Button variant="contained" sx={Estilos.buttonStyle}>
                        Ficha de Desempeños
                    </Button>                                       
                </Grid>
                <Grid item xs={8} sm={8} md={8}  sx={Estilos.gridItemStyle}>
                    <Grid 
                        container direction="column" 
                        alignItems="center" 
                        style={{backgroundColor:'white', borderRadius:'200px', borderWidth:'120px'}}
                    >
                        <Typography variant="h6" component="div" sx={Estilos.textoJugadores}>
                            JUGADORES
                        </Typography>
                        <Box style={Estilos.contenedorTabla}>
                            <Table sx={{backgroundColor:'white'}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{fontWeight:'bold'}}>N° Documento</TableCell>
                                        <TableCell sx={{fontWeight:'bold'}}>Nombre</TableCell>
                                        <TableCell sx={{fontWeight:'bold'}}>Apellido</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {jugadores.map((jugador, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{jugador.documento}</TableCell>
                                            <TableCell>{jugador.nombre}</TableCell>
                                            <TableCell>{jugador.apellido}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                        
                    </Grid>
                </Grid>                
            </Grid>
        </Box>
    );
  };
  
  export default Tarjeta;