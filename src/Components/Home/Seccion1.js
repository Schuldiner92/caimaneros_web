import { React, Paper, Grid, Typography, styled, Box } from '../../imports';
import equipo from '../../img/s1-equipo.jpg'; 

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'relative', // Necesario para posicionar el pseudo-elemento
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${equipo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '900px',
  width: '100%',
  '&::before': { // Pseudo-elemento para la imagen de Background opaca
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de superposición negro con opacidad 50%   
    zIndex: 1
  },
}));

const Estilos ={
  texto:{
    color: 'white', 
    textAlign: 'center', 
    fontWeight:'bold'
  }
};

const Seccion1 = () => {    
  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledPaper>          
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant='h1' component='h2' sx={Estilos.texto}>
              CAIMANEROS
            </Typography>
            <Typography variant='h2' sx={Estilos.texto}>
              ¡Destacando con cada saque y remate!
            </Typography>
          </Box>
        </StyledPaper>
      </Grid>
    </Grid>
  );
} 

export default Seccion1;
