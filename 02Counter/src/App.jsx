import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
  /* Hooks  given by hooks is (array, function) */ 
  let [counter, setCounter]  = useState(11)

  // let counter = 0;
  const addValue = ()=>{

        // counter = counter + 1 

        /* Send Data into batches by useStates(hooks) */
        setCounter(prevCounter => prevCounter + 1)  // 1
        setCounter(prevCounter => prevCounter + 1)  // 1
        setCounter(prevCounter => prevCounter + 1)  // 1
        setCounter(prevCounter => prevCounter + 1)  // 1
                                                    // 4     
  }

  const removeValue = ()=>{

      
        // counter = counter - 1
        setCounter(counter - 1)       
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={ addValue }>Add Value </button>
      <br />
      <button onClick={ removeValue }>Remove Value </button>

      <p>Footer : { counter }</p>
    </>
  )
}

export default App
