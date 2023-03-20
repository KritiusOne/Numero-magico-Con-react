import { useState } from 'react'
import './App.css'

const NUMERO_MAGICO = Math.round(Math.random() * 100)
function App() {
  const [intentosAnteriores, setIntentosAnteriores] = useState([])
  const [intentoCercano, setIntentoCercano] = useState(0)
  const [vidas, setVidas] = useState(10)
  const [ganaste, setGanaste] = useState(false)
  const [entradaInvalida, setEntradaInvalida] = useState(false)
  console.log(NUMERO_MAGICO)
  const recordActual = localStorage.getItem('myRecord')
  console.log(recordActual)
  const getNumberInput = (e)=>{
    e.preventDefault()
    const $inputNumber = document.querySelector('#getNumber')
    if(vidas > 0 || ganaste == false){
      if($inputNumber.value >=1 && $inputNumber.value <= 100){
        setEntradaInvalida(false)
        if(NUMERO_MAGICO == $inputNumber.value){
          setGanaste(true)
          if( recordActual != null && recordActual < vidas ){
            localStorage.setItem('myRecord', vidas)
          }else if(recordActual == null) localStorage.setItem('myRecord', vidas)
        }else{
          setVidas(vidas - 1)
          setIntentosAnteriores(intentosAnteriores => intentosAnteriores.concat($inputNumber.value))
          console.log(intentosAnteriores)
          const IntentoCercanoParcial = (parseInt($inputNumber.value) - NUMERO_MAGICO)
          const b = IntentoCercanoParcial * Math.sign(parseInt(IntentoCercanoParcial)) 
          if(vidas == 10) setIntentoCercano($inputNumber.value)
          else{
            const a = (intentoCercano - NUMERO_MAGICO) * Math.sign(intentoCercano - NUMERO_MAGICO)
            if(a<b) console.log('Intento Cercano actual')
            else if(b<a) setIntentoCercano($inputNumber.value)
            else if(b == a) setIntentoCercano($inputNumber.value)
          }
        }
      }else setEntradaInvalida(true)
    }else if(vidas <= 0) console.log('perdiste')
    else if(ganaste) console.log('YA HAZ GANADO PERRI')

  }

  return (
    <div className="App">
      <h1 className='App__title'>
        <span className="App__title__celulas">Numero Magico</span>
        <span className="App__title__celulas">Con</span>
        <span className="App__title__celulas">React</span>
      </h1>
      <h3>RECORD ACTUAL: {recordActual != null ? recordActual : 'NO ENCONTRADO'} </h3>
      <form>
        <input type="text" id="getNumber" placeholder='Ingresa un numero...' />
        <input type="button" onClick={getNumberInput} value="ENVIAR INTENTO" />
      </form>
      <div>
        <section className="App__gameplayInfo getIntentoCercano">
          { intentoCercano && <div>Intento mas cercano: <span> {intentoCercano} </span> {intentoCercano < NUMERO_MAGICO ? <span>Prueba con un numero mas alto</span> : <span>Prueba con un numero mas bajo </span> } </div> }
        </section>
        <section className="App__gameplayInfo getIntentosPasados">
          {intentosAnteriores != 0 ? intentosAnteriores.map((intento, index)=><span key={index}>{
          intento} </span>) : <div>INGRESA UN VALOR ENTRE 1 Y 100</div>}
        </section>
        <section className="App__gameplayInfo getInfo">
          <div className='App__gameplayInfo__vidasTotales'>
            {
              vidas > 0 ? <span> Vidas restantes: {vidas} </span> : <span>¡HAZ PERDIDO!</span>
            }
          </div>
          <div className='App__gampleyInfo__EstadoActual'>
            {ganaste && <em>HAZ GANADO</em>}
          </div>
          <div>
            {entradaInvalida && <em>¡ES ENTRE 1 Y 100!</em>}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
