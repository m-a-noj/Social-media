import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import CreateContent from './components/CreateContent'
import DisplayContent from './components/DisplayContent'
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import PostListProvider from './store/contentData'



function App() {
  const [selected, setSelected] = useState("")

  return (
    <PostListProvider>
  <div className='container'>
    <Header></Header>
    <div className='content'>
    <SideBar selected={selected} setSelected={setSelected}></SideBar>
    {selected === "home" ? (<DisplayContent></DisplayContent>):(<CreateContent></CreateContent>)}
   
   
    </div>
    <Footer></Footer>
    

  </div>
  </PostListProvider>
  )
}

export default App
