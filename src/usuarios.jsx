import { useEffect, useId, useState } from 'react';

import './App.css';


function Usuarios({recargar}) {

  const [usuarios, setUsuarios] = useState([]);

 
  
 
 
  async function obtenerUsuario() {
    const peticion = await fetch(import.meta.env.VITE_HOSTBACKEND +'/usuarios', { credentials: 'include' })
    if (peticion.ok) {
      const respuesta = await peticion.json()
      setUsuarios(respuesta)
    }
  }

  async function eliminarUsuario(id) {
    const peticion = await fetch(import.meta.env.VITE_HOSTBACKEND +'/usuarios?id='+id,{ credentials: 'include', method: 'DELETE' });
    if (peticion.ok) {
      alert('usuario eliminado')
      obtenerUsuario();
    } else {
      alert('No se pudo eliminar el usuario');
    }
  }
  


  useEffect(() => {
    obtenerUsuario();
 
  }, [recargar])

  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>usuario</th>
            <th>clave</th>
            <th>opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(usuario => (
              <tr key={usuario.id}>
                <th>{usuario.id}</th>
                <th>{usuario.nombre}</th>
                <th>{usuario.contraseña}</th>
                <th>
                  <button  onClick = {() => {eliminarUsuario(usuario.id) }}
                  >x</button>
                </th>
               
              </tr>
            ))
          }
        </tbody>
      </table>

      
    </>
  );
}

export default Usuarios;
