import { React, Box, Paper, Grid, Typography, styled, StarIcon } from '../imports';
import perfil from '../img/s7-perfil.png';

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '20px',  
  border: '3px solid #224BB6',  
}));

const StyledImage = styled('img')({
  width: '120px',
  height: '180px',
  marginRight: '20px',
  borderRadius: '30px'
});

const Seccion7 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant='h3' sx={{ fontWeight: 'bold', color: '#d9c30b', my: 5, textAlign: 'center',marginTop:'80px' }}>
        ¿Qué dicen sobre nosotros?
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{padding:'30px'}}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledPaper>
              <StyledImage src={perfil} alt="Retrato" />
              <Box>
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#224BB6', marginBottom:'20px' }}>
                  Gabriela Velez
                </Typography>
                <Typography variant='body1'>
                  "Lorem ipsum dolor sit 
                </Typography>
                <Typography variant='body1'>
                   amet, consectetur
                </Typography>
                <Typography variant='body1'>
                    adipiscing elit, sed do
                </Typography>
                <Typography variant='body1'>
                    eiusmod tempor incididunt
                </Typography>
                <Typography variant='body1'>
                    ut labore et dolore magna
                </Typography>
                <Typography variant='body1'>
                    aliqua."
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                  {[...Array(5)].map((e, i) => (
                    <StarIcon key={i} sx={{color:'#f7e86d', height:'50px', width:'40px'}}/> // Repite para la cantidad de estrellas que necesites
                  ))}
                </Box>
              </Box>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
      <Box container sx={{padding:'40px'}} ></Box>
    </Box>
  );
};

export default Seccion7;
