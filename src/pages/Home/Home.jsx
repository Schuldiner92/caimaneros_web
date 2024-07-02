import { Box} from '../../import';
import Menu from '../../components/Home/Menu';
import Seccion1 from '../../components/Home/Seccion1';
import Seccion2 from '../../components/Home/Seccion2';
import Seccion3 from '../../components/Home/Seccion3';
import Seccion4 from '../../components/Home/Seccion4';
import Seccion5 from '../../components/Home/Seccion5';
import Seccion6 from '../../components/Home/Seccion6';
import Seccion7 from '../../components/Home/Seccion7';

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