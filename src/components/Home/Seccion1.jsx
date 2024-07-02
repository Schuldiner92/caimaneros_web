import { Box, Typography, Carousel, Paper } from '../../import'
import img1 from '../../img/s1-01.jpeg'
import img2 from '../../img/s1-02.jpeg'
import img3 from '../../img/s1-03.jpeg'

const Estilos = {
    contenedorPrincipal: {        
        width: '100%',
        padding: 0, 
        margin: 0,  
    },
    carrusel: {        
        display: 'flex',      
        width: '100%',               
    },
    item: {
        position: 'relative',
        height: '750px',   
        width: '100%',         
        display: 'flex',
        justifyContent: 'center',                     
    },
    imgg: {
        position: 'absolute',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',       
    },
    textoEncima: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '20px',
    },
    typography: {
        textAlign:'center',
    }
};

const Seccion1 = () => {
    const texto = (
        <>
            <Typography variant="h1" component="h2">
                CAIMANEROS
            </Typography>
            <Typography variant="h2">
                ¡Destacando con cada saque y remate!
            </Typography>
        </>
    );
    const items = [
        { img: img1, texto },
        { img: img2, texto },
        { img: img3, texto },       
    ];
    return (        
        <Box sx={Estilos.contenedorPrincipal}>   
            <Box sx={{paddingTop:'90px'}}>            
            </Box> 
            <Carousel 
                indicators={false}
                navButtonsAlwaysVisible={true}                
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>               
        </Box>
    );
};
function Item(props) {
    return (
        <Paper elevation={0} sx={Estilos.item}>
            <img src={props.item.img} alt="" style={Estilos.imgg} />
            <Box sx={Estilos.textoEncima}>
                <Typography style={Estilos.typography}>
                    {props.item.texto}
                </Typography>
            </Box>
        </Paper>
    );
}
export default Seccion1;