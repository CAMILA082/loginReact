import { useEffect, useId, useState } from 'react';

import './App.css';
import Conversor from './conversor';
import Registro from './registro';
import Usuarios from './usuarios';
function App() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [logeado, setLogeado] = useState(false);
  const [recargar, setRecargar] = useState(false);


  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }
  function recargarAhora() {
    setRecargar(!recargar)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value);
  }

  async function ingresar() {

    const peticion = await fetch(import.meta.env.VITE_HOSTBACKEND +'/login?usuario=' + usuario + '&clave=' + clave, { credentials: 'include' })
    if (peticion.ok) {

      setLogeado(true)
    } else {
      alert("Usuario o contraseña inválidos");
    }
  }

  async function validar() {
    const peticion = await fetch(import.meta.env.VITE_HOSTBACKEND +'/validar', { credentials: 'include' })
    if (peticion.ok) {
      setLogeado(true)

    }
  }






  useEffect(() => {
    validar()

  }, [])

  if (logeado) {
    return (
      <>


        <Registro recargarAhora={recargarAhora} />
        <Conversor />
        <Usuarios recargar={recargar} />



      </>);
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
