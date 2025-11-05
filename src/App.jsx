
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Feature1 from './Feature1'
import Advantage from './Advantage'
import Library from './Library'
import Header from './Header'
import Footer from './Footer'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/feature' element={<Feature1 />} />
      <Route path='/library' element={<Library />} />

     
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
