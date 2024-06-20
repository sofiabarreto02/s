import { RutaA } from "./components/RutaA/RutaA"
import { Routes, Route, NavLink } from "react-router-dom"
import { useState } from "react";
import { RutaB } from "./components/RutaB/RutaB";
import { RutaC } from "./components/RutaC/RutaC";
import { NotFound } from "./components/NotFound/NotFound";
//importamos todas las rutas

function App() {
  const [Busqueda, setRoute] = useState('');
  //cogemos el valor del elemento
  const input = (event) => {
    setRoute(event.target.value)
  }

  return (
    <>
      <a className="return" href="">Retornar</a>
      <h1>Actividad complementaria React</h1>
      <p>Complete las rutas</p>
      <form className='frm-get-route'>
        <input value={Busqueda} onChange={input} type="text" placeholder='complete la ruta' />
        <NavLink to={Busqueda}  className='go-to-route' >Ir A La Ruta</NavLink>
       
      </form>
    
      <Routes>
        <Route path='/rutaA' element={<RutaA />} />
        <Route path='/rutaB' element={<RutaB />} />
        <Route path="/rutaC" element={<RutaC />} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes>


    </>
  )
}

export default App