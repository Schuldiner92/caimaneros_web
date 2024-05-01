import { React, Typography, AppBar, Toolbar, IconUser, Avatar} from '../../imports';
import Icon from '../../img/simbolo.jpg';

const Estilos = {
    wid: {
        width: '50px',
        height: '50px',
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
                <img src={Icon} alt= 'Icono'style={Estilos.wid}/>
                <Typography variant="h6" component="div">Inicio</Typography>
                <Typography variant="h6" component="div">¿Quienes somos?</Typography>
                <Typography variant="h6" component="div">Proyección</Typography>
                <Avatar src={IconUser} style={Estilos.icons}></Avatar>
            </Toolbar>
        </AppBar>
  );
}
export default Menu;
