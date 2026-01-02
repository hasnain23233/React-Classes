import './App.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import React , {useState} from 'react'

function App() {
  const [state , setState] = useState(5)
  const [show , setShow] = useState(false)

  const handleState = ()=>{
    setState(state + 1)
  }
  const subHandleState = ()=>{
    setState(state - 1)
  }

  const showText = ()=>{
    setShow(!show) /// show true = false false = true
  }

  return (
    <>
    <div className='flex items-center justify-center gap-4 h-40'>
      <p><button onClick={handleState}>+</button></p>
      <p className='text-2xl'>{state}</p>
      <p><button onClick={subHandleState}>-</button></p>
    </div>
    <button onClick={showText}>Show More Details</button>
    <p className={`${show === true ? 'block': 'hidden'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cumque culpa doloremque odio expedita optio asperiores aut, soluta corporis, mollitia dolorem? Inventore, asperiores. Est cum quia beatae ut iste officia.</p>
    </>
  )
}

export default App
