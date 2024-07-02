import { Box, Paper, Grid, Typography, styled, StarIcon,Button,SportsVolleyballIcon } from '../../import';
import perfil from '../../img/s7-perfil.png';
import background from '../../img/s8-background.png';

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '60px',  
  border: '3px solid #224BB6', 
}));
const StyledImage = styled('img')({ //Imagen del opinante
  width: '100px',
  height: '150px',
  marginRight: '20px',
  borderRadius: '30px'
});
const StyledBox = styled(Box)(({ theme }) => ({
  height:'500px',
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',   
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover', 
  padding: theme.spacing(2), 
}));
const StyledButton = styled(Button)({
  background:'#224BB6',  
  borderRadius:'40px',
  height:'78px',
  width:'390px',
  fontSize:'1.6rem',
  fontWeight:'bold'
});
function ButtonWithIcon({children}) { //Botón con icono
  return (
    <StyledButton startIcon={<SportsVolleyballIcon/>} variant="contained"> 
      {children} 
    </StyledButton>
  );
}
const Estilos={
  textoTitulo:{
    fontWeight: 'bold', 
    color: '#d9c30b', 
    my: 5, 
    textAlign: 'center',
    marginTop:'80px',
  },
  contenedorOpinion:{
    paddingLeft:'60px',
    paddingRight:'60px',
  },
  nombreOpinion:{
    fontWeight: 'bold', 
    color: '#224BB6', 
    marginBottom:'20px',
  },
  textoInscripcion:{
    fontWeight: 'bold', 
    color: 'white',   
    textAlign: 'center',
    marginTop:'10px',
  },
};
const Seccion7 = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant='h3' sx={Estilos.textoTitulo}>
          ¿Qué dicen sobre nosotros?
        </Typography>
        <Grid container spacing={8} justifyContent="center" sx={Estilos.contenedorOpinion}>
          {Array.from({ length: 3 }).map((_, index) => ( //Repetimos el styled paper porque es un placeholder repetido
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledPaper>
                <StyledImage src={perfil} alt="Retrato" />
                <Box sx={{overflow:'hidden'}}>
                  <Typography variant='h4' sx={Estilos.nombreOpinion}>
                    Gabriela Velez
                  </Typography>
                  <Typography variant='body1'>&#34;Lorem ipsum dolor sit</Typography>
                  <Typography variant='body1'>amet, consectetur</Typography>
                  <Typography variant='body1'>adipiscing elit, sed do</Typography>
                  <Typography variant='body1'>eiusmod tempor incididunt</Typography>
                  <Typography variant='body1'>ut labore et dolore magna</Typography>
                  <Typography variant='body1'>aliqua.&#34;</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    {[...Array(5)].map((e, i) => (
                      <StarIcon key={i} sx={{color:'#f7e86d', height:'50px', width:'40px'}}/> //Repetimos las estrellas
                    ))}
                  </Box>
                </Box>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>        
      </Box>
      <Box container sx={{marginBottom:'150px'}}></Box>
      <StyledBox>
        <Box container sx={{marginRight:'80px'}}>       
          <ButtonWithIcon >  
            ¡Quiero Inscribirme!        
          </ButtonWithIcon>
        </Box>      
        <Box container sx={{display:'flex-column',marginLeft:'80px'}}>        
          <Typography variant='h3' sx={Estilos.textoInscripcion}>No lo pienses más,</Typography>
          <Typography variant='h3' sx={Estilos.textoInscripcion}>únete al Club de</Typography>
          <Typography variant='h3' sx={Estilos.textoInscripcion}>Voleibol Caimaneros</Typography>
          <Typography variant='h3' sx={Estilos.textoInscripcion}>convierte tu pasión en</Typography>
          <Typography variant='h3' sx={Estilos.textoInscripcion}>victoria</Typography>
        </Box>
      </StyledBox>
    </Box>
  );
};

export default Seccion7;
