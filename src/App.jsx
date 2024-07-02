import { BrowserRouter, Routes, Route } from "react-router-dom";

import IniciarSesion from "./InicioSesion.jsx";
import Home from "./pages/Home/Home.jsx";
import CalendarioEntrenamiento from "./pages/calendarioEntrenamiento/CalendarioEntrenamiento.jsx"
import IndexEntrenamiento from "./pages/indexEntrenamiento/IndexEntrenamiento.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<IniciarSesion />}></Route>
          <Route path="/calendarioEntrenamiento" element={<CalendarioEntrenamiento/>}></Route>
          <Route path="/indexEntrenamiento" element={<IndexEntrenamiento/>}></Route>
      </Routes>    
    </BrowserRouter>
  )
}

export default App