import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import CreateContent from './components/CreateContent'
import DisplayContent from './components/DisplayContent'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState()

  return (
  <>
    <Header></Header>
    <SideBar></SideBar>
    <CreateContent></CreateContent>
    <DisplayContent></DisplayContent>
    <Footer></Footer>
  

  </>
   
  )
}

export default App
