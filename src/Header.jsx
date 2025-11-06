import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Home from './Home';
import style from './Navbar.module.css'
import { useState } from 'react';


const Header = () => {
  const[islight,setIslight]=useState(true)
 const Changebg=()=>{
  setIslight(!islight)
  document.body.style.backgroundColor=islight?'black':'white'
  // document.body.style.color=islight?'white':'black'
  
 }
  
  return (
    <>
      <Navbar fixed='top' style={{backgroundColor:'#0B1C2C'}} bg="" data-bs-theme="">
        <Container>
          <Navbar.Brand style={{color:'#61DAFB',fontSize:'20px',fontFamily:'Times New Roman'}} className='' href="#home">React Info Hub</Navbar.Brand>
          <Nav className=" d-flex justify-content-end gap-3">
         
               <Link className={style.forList} style={{textDecoration:'none'}} to={'/'}>Home</Link>
           <Link className={style.forList} style={{textDecoration:'none'}} to={'about'}>About</Link>
            <Link className={style.forList} style={{textDecoration:'none'}} to={'feature'}>features</Link>
              <Link className={style.forList} style={{textDecoration:'none'}} to={'library'}>Library</Link>
              <button className='btn btn-light' onClick={Changebg}>ChangeMode</button>
           
          
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
