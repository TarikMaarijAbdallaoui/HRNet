
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "./components/Formulario";
import Empleados from "./components/Empleados";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="*" element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
