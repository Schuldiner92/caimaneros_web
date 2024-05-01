import { React, Box} from '../../imports';
import Menu from './Menu';
import Seccion1 from './Seccion1';
import Seccion2 from './Seccion2';
import Seccion3 from './Seccion3';
import Seccion4 from './Seccion4';
import Seccion5 from './Seccion5';
import Seccion6 from './Seccion6';
import Seccion7 from './Seccion7';

const Home = () => {   
    return (
        <Box>
            <Menu/>   
            <Seccion1/> 
            <Seccion2/>      
            <Seccion3/>  
            <Seccion4/>    
            <Seccion5/>  
            <Seccion6/> 
            <Seccion7/> 
        </Box>
  );
}
export default Home;