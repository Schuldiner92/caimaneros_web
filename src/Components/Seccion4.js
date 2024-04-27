import { React, Box, Typography, Carousel, Paper } from '../imports'
import img1 from '../img/s4-img1.png'
import img2 from '../img/s4-img2.jpg'
import img3 from '../img/s4-img3.jpg'
import img4 from '../img/s4-img4.png'
import img5 from '../img/s4-img5.jpg'

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
    },
    textoTitulo: {
        fontWeight: 'bold',
        color:'#1739a4',
        marginLeft: '30px', 
        marginRight: '30px', 
    },
    carrusel: {        
        diplay:'flex',      
        width: '38%',  
        backgroundColor:'#f7e86d',
        marginLeft:'600px'                   
    },
    item: {
        height: '500px',   
        width:'100%',         
        display: 'flex',
        justifyContent: 'center',  
        backgroundColor:'#f7e86d',             
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
    },
};

const Seccion4 = () => {
    const items = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
    ];
    return (
        <Box style={Estilos.contenedorPrincipal}>            
            <Box style={Estilos.titulo}>                
                <Box style={Estilos.linea} />                            
                <Typography variant="h3" style={Estilos.textoTitulo}>TORNEOS</Typography>                           
                <Box style={Estilos.linea} />
            </Box>            
            <Paper container elevation={0} style={Estilos.carrusel}>
                <Carousel>
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </Carousel>               
            </Paper>
        </Box>
    );
};
function Item(props) {
    return (
        <Paper style={Estilos.item}>
            <img src={props.item.img} alt="" style={Estilos.img} />
        </Paper>
    );
}
export default Seccion4;