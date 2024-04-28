import { React, Box, Typography, TextField, InputAdornment, PsychologyAltIcon, KeyboardArrowDownIcon } from '../imports'

const Estilos = {
    fondo:{               
        background:'#f7e86d',
        borderRadius: '30px'
    },
    textoTitulo: {             
        fontWeight: 'bold',
        color:'white',          
        justifyContent: 'center',  
    },   
    icons:{
        color: '#1976d2', 
        fontSize: '4rem'
    }, 
    inputProps:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black' 
    },
    contenedorTF:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:4         
    },
    textField:{        
        borderRadius: '35px',
        backgroundColor: '#d4d4d4',
        border: 'none',
        height: '70px',
        width: '45%',        
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'transparent',
            },
            '&:hover fieldset': {
                borderColor: 'transparent', 
            },
            '&.Mui-focused fieldset': {
                borderColor: 'transparent', 
            },
        },
    },
};
const Seccion6 = () => {
    return (
        <Box container sx={Estilos.fondo}>
            <Box container sx={{padding:'60px'}} >
                <Typography variant='h3'sx={Estilos.textoTitulo}>Preguntas Frecuentes</Typography>                            
            </Box>            
            <Box sx={Estilos.contenedorTF}>                
                <TextField                 
                    id="custom-input"
                    variant="outlined"
                    placeholder="¿Qué edad es permitida para entrenar?"
                    InputProps={{
                        startAdornment: (<InputAdornment position="start"> <PsychologyAltIcon sx={Estilos.icons} /> </InputAdornment>),
                        endAdornment: (<InputAdornment position="end"> <KeyboardArrowDownIcon sx={Estilos.icons} /> </InputAdornment>),
                    }}
                    inputProps={{sx: Estilos.inputProps }}
                    sx={Estilos.textField}
                />
                <TextField                 
                    id="custom-input"
                    variant="outlined"
                    placeholder="¿Qué edad es permitida para entrenar?"
                    InputProps={{
                        startAdornment: (<InputAdornment position="start"> <PsychologyAltIcon sx={Estilos.icons} /> </InputAdornment>),
                        endAdornment: (<InputAdornment position="end"> <KeyboardArrowDownIcon sx={Estilos.icons} /> </InputAdornment>),
                    }}
                    inputProps={{sx: Estilos.inputProps }}
                    sx={Estilos.textField}
                />
                <TextField                 
                    id="custom-input"
                    variant="outlined"
                    placeholder="¿Qué edad es permitida para entrenar?"
                    InputProps={{
                        startAdornment: (<InputAdornment position="start"> <PsychologyAltIcon sx={Estilos.icons} /> </InputAdornment>),
                        endAdornment: (<InputAdornment position="end"> <KeyboardArrowDownIcon sx={Estilos.icons} /> </InputAdornment>),
                    }}
                    inputProps={{sx: Estilos.inputProps }}
                    sx={Estilos.textField}
                />
                <TextField                 
                    id="custom-input"
                    variant="outlined"
                    placeholder="¿Qué edad es permitida para entrenar?"
                    InputProps={{
                        startAdornment: (<InputAdornment position="start"> <PsychologyAltIcon sx={Estilos.icons} /> </InputAdornment>),
                        endAdornment: (<InputAdornment position="end"> <KeyboardArrowDownIcon sx={Estilos.icons} /> </InputAdornment>),
                    }}
                    inputProps={{sx: Estilos.inputProps }}
                    sx={Estilos.textField}
                />
            </Box>
            <Box container sx={{padding:'40px'}} ></Box>
        </Box>
    );
  };
  
  export default Seccion6;