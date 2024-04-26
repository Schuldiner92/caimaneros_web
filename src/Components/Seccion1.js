import { React, Paper, Grid, Typography, styled, Box } from '../imports';
import equipo from '../img/s1-equipo.jpg'; 

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

const Seccion1 = () => {
    const home = {
        marginTop: '60px',
        color: 'white',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:equipo
        ,
    }

  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledPaper>          
          <Box style={{ position: 'relative', zIndex: 2 }}>
            <Typography variant='h1' component='h2' style={{ color: 'white', textAlign: 'center', fontWeight:'bold' }}>
              CAIMANEROS
            </Typography>
            <Typography variant='h2' style={{ color: 'white', textAlign: 'center', fontWeight:'bold' }}>
              ¡Destacando con cada saque y remate!
            </Typography>
          </Box>
        </StyledPaper>
      </Grid>
    </Grid>
  );
} 

export default Seccion1;
