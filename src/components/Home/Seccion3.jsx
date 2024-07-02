import { Box, Grid, Paper, Typography } from '../../import';
import placeholder from '../../img/s3-01.jpg';
import fondo from '../../img/s3-background.svg'

const Estilos = {
  contenedorPrincipal: {
    background: `url(${fondo})`,
    position: 'relative', 
    height: '700px',
    overflow: 'hidden', 
    backgroundColor:'#f7e86d',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alightItems:'center',
    zIndex:2,
    backgroundSize: 'cover',
  },
  svgFondo: {    
    fill: '#1e30cf',
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: 600, 
    zIndex: -1,     
    transform: 'rotate(180deg)', 
  }, 
  gridContenedor: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',   
  },
  texto: {  
    paddingTop:'50px',  
    fontWeight: 'bold',
    padding: '6px',    
    color: 'white',
    backgroundColor: 'transparent',
    textAlign:'center'
  },
  imagen: {
    display: 'block', 
    objectFit: 'cover', 
    width: '85%',     
    borderRadius: '40px',
    overflow: 'hidden',
    backgroundColor: 'transparent', 
    margin:'0 auto'           
  },
};
const Seccion3 = () => {
    return (
      <Box sx={Estilos.contenedorPrincipal}>                                             
            <Grid item xs={12} md={6} sx={Estilos.gridContenedor}>              
                <Paper elevation={0} sx={{backgroundColor:'transparent'}}>
                    <Typography variant="h3" component="p" sx={Estilos.texto}>
                    ¡Nuestra misión es 
                    </Typography>     
                    <Typography variant="h3" component="p" sx={Estilos.texto}>
                    cultivar el desarrollo
                    </Typography>
                    <Typography variant="h3" component="p" sx={Estilos.texto}>
                    deportivo y personal de 
                    </Typography>
                    <Typography variant="h3" component="p" sx={Estilos.texto}>
                    jóvenes atletas!
                    </Typography>       
                </Paper>               
            </Grid>        
            <Grid item xs={12} md={6} sx={Estilos.gridContenedor}>
              <Paper elevation={0} sx={Estilos.imagen}>
                <img src={placeholder} alt="Equipo de Volleyball" style={Estilos.imagen} />
              </Paper>
            </Grid>                   
      </Box>
      
    );
  };
  
  export default Seccion3;