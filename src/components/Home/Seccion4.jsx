import { Box, Typography, Paper } from '../../import'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import '../../App.css';
import img2 from '../../img/s4-02.jpg'
import img3 from '../../img/s4-03.jpg'

const Estilos = {
    contenedorPrincipal: {        
        width: '100%',
        backgroundColor: '#f7e86d', 
        padding: 0, 
        margin: 0,  
    },
    titulo: {
        color: 'white',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        position: 'relative',
        width: 'fit-content', 
        marginLeft: '100px',       
    },
    linea: {
        height: '12px',
        width: '120px',
        backgroundColor: 'white', 
        marginBottom:'40px'                
    },
    textoTitulo: {        
        fontWeight: 'bold',
        color:'#224BB6',
        marginLeft: '30px', 
        marginRight: '30px', 
        marginBottom: '40px'
    },   
    contImg:{
        backgroundColor:'#f7e86d'
      },
    img:{    
        width:'100%',
        borderRadius:'20px'
    }, 
};
const Seccion4 = () => {    
    const responsive = {
        superLargeDesktop: {      
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <Box sx={Estilos.contenedorPrincipal}>    
            <Box sx={{padding:'40px'}} ></Box>          
            <Box sx={Estilos.titulo}>                
                <Box sx={Estilos.linea} />                            
                <Typography variant="h3" sx={Estilos.textoTitulo}>TORNEOS</Typography>                           
                <Box sx={Estilos.linea} />
            </Box>            
            <Paper container elevation={0} >
                <Carousel responsive={responsive}>
                    <Box className='card' sx={Estilos.contImg}>
                        <img style={Estilos.img}
                        className='product--image'
                        src={img3}
                        alt='product image'
                        />
                    </Box>
                    <Box className='card' sx={Estilos.contImg}>
                        <img style={Estilos.img}
                        className='product--image'
                        src={img2}
                        alt='product image'
                        />
                    </Box>
                    <Box className='card' sx={Estilos.contImg}>
                        <img style={Estilos.img}
                        className='product--image'
                        src={img3}
                        alt='product image'
                        />
                    </Box>
                    <Box className='card' sx={Estilos.contImg}>
                        <img style={Estilos.img}
                            className='product--image'
                            src={img2}
                            alt='product image'
                        />
                    </Box>
                    <Box className='card' sx={Estilos.contImg}>
                        <img style={Estilos.img}
                            className='product--image'
                            src={img3}
                            alt='product image'
                        />
                    </Box>
                </Carousel>             
            </Paper>          
        </Box>
    );
};
export default Seccion4;