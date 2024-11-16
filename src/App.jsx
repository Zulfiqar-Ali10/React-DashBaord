import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/home'
import Button from './Components/buttonsCom'
import DropDown from './Components/dropDownCom'
import TypoGraphy from './Components/typoGraphyCom'
import BasicElement from './Components/basicElementCom'
import Chart from './Components/chartCom'
import TableElement from './Components/tableElement'
import Icon from './Components/iconCom'
import Blank from './Components/blankPage'
import Error from './Components/errorPageCom'
import ErrorFive from './Components/errorpage2Com'
import Login from './Components/loginCom'
import Register from './Components/register'




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
   <Route path='/chart'  element={<Chart/>}/>
   <Route path='/tableelement'  element={<TableElement/>}/>
   <Route path='/icon'  element={<Icon/>}/>
   <Route path='/blank'  element={<Blank/>}/>
   <Route path='/404'  element={<Error/>}/>
   <Route path='/505'  element={<ErrorFive/>}/>
   <Route path='/login'  element={<Login/>}/>
   <Route path='/register'  element={<Register/>}/>

   </Routes>
    </>
  )
}

export default App
