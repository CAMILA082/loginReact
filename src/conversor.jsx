import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Conversor() {
  const [textoAvoz, setTextoAvoz] = useState("");
  const [vozATexto, setVozATexto] = useState("");
  
  function cambiarTexto(evento) {
    setTextoAvoz(evento.target.value);
  }

  function convertirTextoAvoz() {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(textoAvoz);
    synth.speak(utterThis);
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "es-ES";
    recognition.start();
    recognition.onresult = function (event) {
      setVozATexto(event.results[0][0].transcript);
    };
  }

  return (
    <>
    <h1>Converor TTS - STT</h1>
      <br />
      <h3>Conversor de texto a voz</h3>
      <input type="text" id="textoAvoz" value={textoAvoz} onChange={cambiarTexto} />
      <button onClick={convertirTextoAvoz}>Convertir</button>

      <h3>Conversor de voz a texto</h3>
      <button onClick={grabarVozATexto}>Grabar</button>
      <p>{vozATexto}</p>
    </>
  );
}

export default Conversor;
