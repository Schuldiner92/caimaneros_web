import { React, Box, Grid, Paper, Typography } from '../imports';
import placeholder from '../img/s3-placeholder.jpg';

const Estilos = {
  contenedorPrincipal: {
    position: 'relative', 
    height: '700px',
    overflow: 'hidden', 
  },
  fondoAzul: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    height: '350px', 
    backgroundColor: '#1739a4',
    zIndex: 1, 
  },
  fondoAmarillo: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    height: '350px', 
    backgroundColor: '#f7e86d',
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
    padding: '16px',    
    color:'white',
    backgroundColor: 'transparent',
  },
  imagen: {
    display: 'block', 
    objectFit: 'contain', 
    width: '90%', 
    height: '90%', 
    borderRadius: '30px',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    margin: 'auto'      
  },
};
const Seccion3 = () => {
    return (
      <Box sx={Estilos.contenedorPrincipal}>      
        <Box sx={Estilos.fondoAzul} />
          <Box sx={Estilos.fondoAmarillo} />      
        <Grid container spacing={2} sx={Estilos.subcontenedor}>        
            <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={Estilos.texto}>
                    <Typography variant="h3" component="p">
                    ¡Nuestra misión es 
                    </Typography>     
                    <Typography variant="h3" component="p">
                    cultivar el desarrollo
                    </Typography>
                    <Typography variant="h3" component="p">
                    deportivo y personal de 
                    </Typography>
                    <Typography variant="h3" component="p">
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