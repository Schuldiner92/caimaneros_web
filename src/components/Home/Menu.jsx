import { Typography, AppBar, Toolbar, IconUser, Avatar, Box} from '../../import';
import Icon from '../../img/s0-logo.jpg';

const Estilos = {
    wid: {
        width: '90px',
        height: '90px',
    },
    icons: {
        background: 'yellow',        
    },
    enc: {
        display: 'flex',
        gap: '30px',
        justifyContent: 'right',
        background: 'white',
        color: '#000'
    }
};
const Menu = () => {       
    return (
        <AppBar>
            <Toolbar style={Estilos.enc}>
                <Box sx={{paddingRight: '650px'}}>
                    <img src={Icon} alt= 'Icono'style={Estilos.wid}/>
                </Box>                
                <Typography variant="h6" component="div">Inicio</Typography>
                <Typography variant="h6" component="div">¿Quienes somos?</Typography>
                <Typography variant="h6" component="div">Proyección</Typography>
                <Avatar src={IconUser} style={Estilos.icons}></Avatar>
            </Toolbar>
        </AppBar>
  );
}
export default Menu;
