import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Library = () => {
  const forLibrary={
    height:'100px',
    width:'100px',
   border:'1px solid black',
    borderRadius:'20px',
   
  

  }
  return (
    <>
    <div style={{height:'100vh'}} className="library">

    
     <h1 style={{marginTop:'60px'}}> React’s Core Libraries & Tools
     </h1>
     <p >Everything you need to build efficient, modern web interfaces.</p>
<Container>
  <Row>
    <Col sm={12} md={6} xg={4}>
    {/* <div style={forLibrary}>

    </div> */}
    <h3 style={{textAlign: 'center'}}>What Is the React Library</h3>
    
    </Col>
        <Col sm={12} md={6} xg={8}>
    {/* <div style={forLibrary}>

    </div> */}
    <p style={{textAlign: "justify"}}>React is not a full framework — it’s a JavaScript library built for building user interfaces.
It focuses on just one thing <span>creating UI components — while letting developers use other tools for routing, state management, and backend handling.
  </span> 
This makes React lightweight, flexible, and easy to integrate with any setup.</p>
    
    </Col>
  </Row>
  <Row>
    <Col sm={12} md={6} xg={4}>
  
    <h3 style={{textAlign: 'center'}}> Core React Libraries</h3>
    <p>React’s core ecosystem includes a few essential libraries that extend its capabilities:</p>

    
    </Col>
        <Col sm={12} md={6} xg={8}>
        <Row>
          <Col sm={6} lg={3}>
          <div className='cardLibrary' >
      <h6 >🧠 React DOM</h6>

    </div>
          </Col>
            <Col sm={6} lg={3}>
          <div className='cardLibrary' >
      <h6 >🔄 React Router</h6>

    </div>
          </Col>
            <Col sm={6} lg={3}>
          <div className='cardLibrary' >
      <h6 >⚡ Redux / Zustand / Context API</h6>

    </div>
          </Col>
            <Col sm={6} lg={3}>
          <div className='cardLibrary' >
      <h6 >💻 React Native</h6>

    </div>
          </Col>
        </Row>
    
   
    
    </Col>
  </Row>
    <Row className='mt-5 mb-5'>
    <Col sm={12} md={6} xg={4}>
  
    <h3 style={{textAlign: 'center'}}> Supporting Tools & Ecosystem</h3>
    <p>React works best when paired with its ecosystem tools:</p>

    
    </Col>
        <Col sm={12} md={6} xg={8}>
        <Row>
          <Col sm={6} lg={3}>
          <div className='cardLibrary' >
      <h6 >Vite / Create React App</h6>

    </div>
          </Col>
            <Col sm={6} lg={3}>
          <div className='cardLibrary' >
      <h6 >Next.js</h6>

    </div>
          </Col>
            <Col sm={6} lg={3}>
          <div className='cardLibrary' >
      <h6 >React Bootstrap / Material UI / Tailwind CSS</h6>

    </div>
          </Col>
            <Col sm={6} lg={3}>
          <div className='cardLibrary' >
      <h6 >Axios / Fetch API</h6>

    </div>
          </Col>
        </Row>
    
   
    
    </Col>
  </Row>

</Container>
</div>
    </>
  )
}

export default Library
