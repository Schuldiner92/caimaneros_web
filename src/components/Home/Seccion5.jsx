import { Box, Paper, Grid, Typography } from '../../import'
import mapa from '../../img/s5-mapa.png';

const Estilos = {
    textoTitulo: {        
        fontWeight: 'bold',
        color:'#224BB6',       
        marginTop:'30px',
        marginBottom:'30px',
        textAlign: 'center'  
    },
    contenedorImagen:{            
        margin:'2.5px'    
    },
    imagen: {      
        position: 'flex',
        width: '220px',
        height: '178',
        borderRadius: '70px',             
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
const redirectToMap = (mapLink) => {
    window.open(mapLink, '_blank');
};
const Seccion5 = () => {
    return (
        <Box>
            <Box container>
                <Typography variant='h3'style={Estilos.textoTitulo}>¿Dónde Nos Ubicamos?</Typography>
            </Box>
            <Grid container spacing={0} style={Estilos.contenedorImagen}>                    
                <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={0} onClick={() => redirectToMap('https://maps.app.goo.gl/TsYu9pJNkB3BqDpL9')}>
                        <img src={mapa} alt="Juego de Volleyball" style={Estilos.imagen} />
                        <Typography variant='h4'style={Estilos.textoDias}>Lunes - Miércoles</Typography>
                        <Typography variant='h5'style={Estilos.textoHoras}>5:00 Pm - 7:00 pm</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4} md={4} onClick={() => redirectToMap('https://maps.app.goo.gl/tm29kKU5z5RVcHWJ7')}>
                    <Paper elevation={0}>
                        <img src={mapa} alt="Equipo de Volleyball" style={Estilos.imagen} />
                        <Typography variant='h4'style={Estilos.textoDias}>Lunes - Miércoles</Typography>
                        <Typography variant='h5'style={Estilos.textoHoras}>5:00 Pm - 7:00 pm</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4} md={4} onClick={() => redirectToMap('https://maps.app.goo.gl/TsYu9pJNkB3BqDpL9')}>
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