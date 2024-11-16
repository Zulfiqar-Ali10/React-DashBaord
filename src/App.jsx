import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/home'
import Button from './Components/buttonsCom'
import DropDown from './Components/dropDownCom'
import TypoGraphy from './Components/typoGraphyCom'
import BasicElement from './Components/basicElementCom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
   <Route path='/'  element={<Home/>}/>
   <Route path='/button'  element={<Button/>}/>
   <Route path='/dropdown'  element={<DropDown/>}/>
   <Route path='/typography'  element={<TypoGraphy/>}/>
   <Route path='/basicelement'  element={<BasicElement/>}/>

   </Routes>
    </>
  )
}

export default App
