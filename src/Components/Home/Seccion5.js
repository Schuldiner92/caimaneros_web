import { React, Box, Paper, Grid, Typography } from '../../imports'
import mapa from '../../img/s5-mapa.png';

const Estilos = {
    textoTitulo: {        
        fontWeight: 'bold',
        color:'#224BB6',       
        marginTop:'100px',
        marginBottom:'60px',
        justifyContent: 'center',  
    },
    contenedorImagen:{      
        marginLeft:'5px',
        marginRight:'5px'
    },
    imagen: {      
        position: 'flex',
        width: '85%',
        height: 'auto',
        borderRadius: '160px',             
    },
    textoDias:{
        fontWeight: 'bold',
        color:'#d9c30b',       
        marginTop:'30px',
        marginBottom:'15px',
    },
    textoHoras:{
        fontWeight: 'bold',
        color:'#224BB6',      
        marginBottom:'100px',
    },

};
const Seccion5 = () => {
    return (
        <Box>
            <Box container>
                <Typography variant='h3'style={Estilos.textoTitulo}>¿Dónde Nos Ubicamos?</Typography>
            </Box>
            <Grid container spacing={0} style={Estilos.contenedorImagen}>                    
                <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={0}>
                        <img src={mapa} alt="Juego de Volleyball" style={Estilos.imagen} />
                        <Typography variant='h4'style={Estilos.textoDias}>Lunes - Miércoles</Typography>
                        <Typography variant='h5'style={Estilos.textoHoras}>5:00 Pm - 7:00 pm</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={0}>
                        <img src={mapa} alt="Equipo de Volleyball" style={Estilos.imagen} />
                        <Typography variant='h4'style={Estilos.textoDias}>Lunes - Miércoles</Typography>
                        <Typography variant='h5'style={Estilos.textoHoras}>5:00 Pm - 7:00 pm</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={0}>
                        <img src={mapa} alt="Balón de Volleyball" style={Estilos.imagen} />
                        <Typography variant='h4'style={Estilos.textoDias}>Lunes - Miércoles</Typography>
                        <Typography variant='h5'style={Estilos.textoHoras}>5:00 Pm - 7:00 pm</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
  };
  
  export default Seccion5;