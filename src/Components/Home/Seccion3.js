import { React, Box, Grid, Paper, Typography } from '../../imports';
import placeholder from '../../img/s3-placeholder.jpg';
import background from '../../img/s3-background.png';

const Estilos = {
  contenedorPrincipal: {
    position: 'relative', 
    height: '700px',
    overflow: 'hidden', 
  },
  fondoConImagen: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, 
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',     
    zIndex: 1,    
  }, 
  subcontenedor: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute',
    top: '50px', // Ajustado para centrar en la división de colores
    bottom: '50px',
    left: 0,
    right: 0,
    zIndex: 2,
  },
  texto: {    
    fontWeight: 'bold',
    padding: '6px',    
    color: 'white',
    backgroundColor: 'transparent',
  },
  imagen: {
    display: 'block', 
    objectFit: 'cover', 
    width: '60%',     
    borderRadius: '50px',
    overflow: 'hidden',
    backgroundColor: 'transparent',       
      
  },
};
const Seccion3 = () => {
    return (
      <Box sx={Estilos.contenedorPrincipal}>      
        <Box sx={Estilos.fondoConImagen} />               
        <Grid container spacing={2} sx={Estilos.subcontenedor}>        
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={Estilos.imagen}>
                <img src={placeholder} alt="Equipo de Volleyball" sx={Estilos.imagen} />
              </Paper>
            </Grid>
        </Grid>             
      </Box>
      
    );
  };
  
  export default Seccion3;