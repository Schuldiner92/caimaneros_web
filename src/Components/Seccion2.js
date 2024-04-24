import { React, Box, Paper, Grid, Typography } from '../imports'
import placeholder from '../img/s2-placeholder.png';
import ball from '../img/s2-ball.png';


    const EstiloImagen = {
        position:'flex',
        width: '100%',
        height: 'auto',
        borderRadius: '8px', // Bordes redondeados
        border: '1px dashed #000', // Borde en líneas discontinuas 
        overflow: 'hidden' // Para asegurar que los bordes redondeados se apliquen
    };

    const EstiloBalon = {
        width: '50px', // Tamaño del balón
        height: '50px',
        position: 'absolute', // Para posicionar sobre la imagen  
        bottom: '10px', // Espacio desde el borde inferior
        right: '10px' // Espacio desde el borde derecho
    };
     
    const EstiloTexto ={        
        color: 'blue',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

  
const Seccion2 = () => {
    return (
        <Box sx={{ position: 'relative', p: 2 }}>
            <Grid container spacing={2}>
                {/* Contenedor de las imágenes */}
                <Grid item xs={12} sm={8} md={8}>
                <Grid container spacing={2}>                    
                    <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={3}>
                        <img src={placeholder} alt="Juego de Volleyball" style={EstiloImagen} />
                    </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={3}>
                        <img src={placeholder} alt="Equipo de Volleyball" style={EstiloImagen} />
                    </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={3}>
                        <img src={placeholder} alt="Balón de Volleyball" style={EstiloImagen} />
                    </Paper>
                    </Grid>
                </Grid>
                </Grid>

                {/* Contenedor del texto */}
                <Grid item xs={12} sm={4} md={4}>
                <Paper elevation={3} style={EstiloTexto}>
                    <Typography variant="h6" component="p">
                        SOMOS EL CLUB DE VOLEIBOL
                    </Typography>     <Typography variant="h6" component="p">
                        CAMINEROS DE CÚCUTA, NORTE
                    </Typography>
                    <Typography variant="h6" component="p">
                        DE SANTANDER. NUESTRO
                    </Typography>
                    <Typography variant="h6" component="p">
                        COMPROMISO ES PROMOVER EL
                    </Typography>
                    <Typography variant="h6" component="p">
                        VOLEIBOL CON PASIÓN Y 
                    </Typography>
                    <Typography variant="h6" component="p">
                        EXCELENCIA. CON ENTRENAMIENTO
                    </Typography>
                    <Typography variant="h6" component="p">
                        DEDICADO Y ESPÍRITU DE EQUIPO, 
                    </Typography>
                    <Typography variant="h6" component="p">
                        ASPIRAMOS A DEJAR NUESTRA 
                    </Typography>
                    <Typography variant="h6" component="p">
                        MARCA EN CADA COMPETICIÓN Y 
                    </Typography>
                    <Typography variant="h6" component="p">
                        EN LA COMUNIDAD.
                    </Typography>
                </Paper>
                </Grid>
            </Grid>
            
            <img src={ball} alt="Balón de Volleyball" style={{...EstiloBalon, left: '20px'}} />
            <img src={ball} alt="Balón de Volleyball" style={{...EstiloBalon, left: '80px'}} />
            <img src={ball} alt="Balón de Volleyball" style={{...EstiloBalon, left: '140px'}} />
        </Box> 
    );
  };
  
  export default Seccion2;