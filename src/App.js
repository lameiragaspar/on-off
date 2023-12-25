import React, {useState} from 'react';
import './App.css';

function App() {
  
  {/*Classes*/}
  {/*1 - Estatos*/}
  const On = 'ativo'
  const Off = 'inativo'
  const [estatos, setEstatos] = useState(true)
  {/*2 - mode*/}
  const dark = 'dark'
  const white = 'white'
  const [mode, setMode] = useState(true)

  {/*textos*/}
  const text_on = 'ON'
  const text_of = 'OFF'
  const [novoTexto, setNovoTexto] = useState(true)
  
  function alteraEstatos(){
    setEstatos(!estatos)
    setNovoTexto(!novoTexto)
    setMode(!mode)
  }

  return (
    <div className={mode? white : dark}>
      <div className='container'>
        <div onClick={alteraEstatos} className={estatos? On : Off}>
          <button onClick={alteraEstatos}  >
            {novoTexto ? text_on : text_of}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;