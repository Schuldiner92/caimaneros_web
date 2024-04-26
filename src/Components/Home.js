import { React, Typography, AppBar, Toolbar, IconUser, Avatar} from '../imports';
import Icon from '../img/simbolo.jpg';

const Home = () => {
    const wid = {
        width: '50px',
        height: '50px',
    }; 

    const icons = {
        background: 'yellow',
    };

    const enc = {
        display: 'flex',
        gap: '30px',
        justifyContent: 'right',
        background: 'white',
        color: '#000'
    };

    return (
        <AppBar>
            <Toolbar style={enc}>
                <img src={Icon} alt= 'Icono'style={wid}/>
                <Typography variant="h6" component="div">Inicio</Typography>
                <Typography variant="h6" component="div">¿Quienes somos?</Typography>
                <Typography variant="h6" component="div">Proyección</Typography>
                <Avatar src={IconUser} style={icons}></Avatar>
            </Toolbar>
        </AppBar>
  );
}
export default Home;
