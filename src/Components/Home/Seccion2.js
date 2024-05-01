import { React, Box, Paper, Grid, Typography } from '../../imports'
import placeholder from '../../img/s2-placeholder.png';
import ball from '../../img/s2-ball.png';

const Estilos = {
    imagen: {
        position: 'flex',
        width: '100%',
        height: 'auto',
        borderRadius: '30px',
        border: '1px dashed #000', //Lineas discontinuas
        borderColor: "#224BB6",
        borderWidth: "3px",
        overflow: 'hidden'
    },
    balon: {
        width: '50px',
        height: '50px',
        position: 'absolute',
        bottom: '10px',
        right: '10px'
    },
    texto: {
        color: '#224BB6',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
};

const Seccion2 = () => {
    return (
        <Box sx={{ position: 'relative', p: 2 }}>
            <Grid container spacing={2}>
                {/* Contenedor de las imágenes */}
                <Grid item xs={12} sm={8} md={8}>
                <Grid container spacing={2}>                    
                    <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={0}>
                        <img src={placeholder} alt="Juego de Volleyball" style={Estilos.imagen} />
                    </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={0}>
                        <img src={placeholder} alt="Equipo de Volleyball" style={Estilos.imagen} />
                    </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                    <Paper elevation={0}>
                        <img src={placeholder} alt="Balón de Volleyball" style={Estilos.imagen} />
                    </Paper>
                    </Grid>
                </Grid>
                </Grid>

                {/* Contenedor del texto */}
                <Grid item xs={12} sm={4} md={4}>
                <Paper elevation={0} style={Estilos.texto}>
                    <Typography variant="h6" component="p">
                        SOMOS EL CLUB DE VOLEIBOL
                    </Typography>     
                    <Typography variant="h6" component="p">
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
            
            <img src={ball} alt="Balón de Volleyball" style={{...Estilos.balon, left: '50px'}} />
            <img src={ball} alt="Balón de Volleyball" style={{...Estilos.balon, left: '150px'}} />
            <img src={ball} alt="Balón de Volleyball" style={{...Estilos.balon, left: '250px'}} />
        </Box> 
    );
  };
  
  export default Seccion2;