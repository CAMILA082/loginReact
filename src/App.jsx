import { useState } from 'react';
import reactLogo from './assets/react.svg'; 
import viteLogo from '/vite.svg'; 
import './App.css';
import Conversor from './conversor'; 

function App() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [logeado, setLogeado] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarClave(evento) {
    setClave(evento.target.value);
  }

  function ingresar() {
    if (usuario === "admin" && clave === "admin") {
      alert("Ingresaste");
      setLogeado(true);
    } else {
      alert("Usuario o contraseña inválidos");
    }
  }

  if (logeado) {
    return <Conversor />; 
    
  }

  return (
    <>
    <h1>Inicio de sesión</h1>
      <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='clave' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
      <button onClick={ingresar}>Ingresar</button>
      
    </>
    
  );
  
}

export default App;
