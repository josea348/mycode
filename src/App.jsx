import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarMoecula from './Components/Molecules/NavbarMoecula'
import NavbarMoeculas from './Components/Molecules/NavbarMoeculas'
import CodeMoecula from './Components/Molecules/CodeMolecula'
import CodesFrontend from './Components/Molecules/CodesFrontend'
import CodesMoeculas from './Components/Molecules/CodesMoleculas'
import CodesBackend from './Components/Molecules/CodesBackend'
import './App.css'

function App() {
  return (
    <BrowserRouter basename='/mycode'>
      <NavbarMoecula />
      <div className='relative top-[72px] w-full'>
        <Routes>
          <Route path='/' element={<CodesFrontend />} />
          <Route path='/frontendheroui' element={<CodesMoeculas />} />
          <Route path='/backend' element={<CodesBackend />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
