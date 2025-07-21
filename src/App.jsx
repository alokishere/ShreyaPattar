import React from 'react'
import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'
import { ReactLenis, useLenis } from 'lenis/react'
const App = () => {

  const lenis = useLenis((lenis) => {
    
  })

  return (
    <div className='bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f]' >
      <ReactLenis root />
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App