import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';


const Feature1 = () => {
  return (
    <>
    <h1 className='text-center ' style={{color:'#61DAFB',marginTop:'60px'}}>Key Features of React</h1>
    <Container>
 <Row >
    <Col className='mb-2' sm={6} lg={4}>
      <Card style={{ minWidth: '18rem' }}>
      <Card.Body>
        <Card.Title>🔄  One-Way Data Flow</Card.Title>
        <Card.Text>
          React follows a one-way data binding approach <br />
Data flows in one direction, <br /> <span>from parent to child components,
  
  </span>  making your app easier to debug and maintain.
        </Card.Text>
       
      </Card.Body>
    </Card>

    </Col>
     <Col className='mb-2' sm={6} lg={4}>
      <Card style={{ width: '18rem',minHeight:'250px' }}>
      <Card.Body>
        <Card.Title>⚙️Component-Based Architecture</Card.Title>
        <Card.Text>
           
 <span>React uses small, reusable building blocks called components.,
  
  </span> <br /> Each component handles its own logic & rendering, making your application organized & easy to maintain.
        </Card.Text>
       
      </Card.Body>
    </Card>

    </Col>
    <Col className='mb-2' sm={6} lg={4}>
      <Card style={{ minWidth: '18rem',minHeight:'250px' }}>
      <Card.Body>
        <Card.Title>⚡ Virtual DOM for Lightning Performance</Card.Title>
        <Card.Text>
          React creates a virtual copy of the actual DOM 
           
 <span>When data changes, React compares the new and old versions and updates only the changed parts
  
  </span>  — giving you fast, smooth UI updates.
        </Card.Text>
       
      </Card.Body>
    </Card>

    </Col>

   </Row>
    <Row className='mt-5 mb-5' >
    <Col className='mb-2' sm={6} lg={4}>
      <Card style={{ minWidth: '18rem' }}>
      <Card.Body>
        <Card.Title>🧠Declarative UI</Card.Title>
        <Card.Text>
          
 <span>Instead of telling the browser how to update the UI, you describe what it should look like.
  
  </span> React automatically manages the updates — resulting in cleaner, predictable, and more readable code.
        </Card.Text>
       
      </Card.Body>
    </Card>

    </Col>
     <Col className='mb-2' sm={6} lg={4}>
      <Card style={{ minWidth: '18rem',minHeight:'250px' }}>
      <Card.Body>
        <Card.Title>🌐Cross-Platform Development</Card.Title>
        <Card.Text>
           
 <span>With React Native, you can build mobile apps using the same React concepts
  
  </span> <br />and reuse much of your code for both web and mobile platforms.
        </Card.Text>
       
      </Card.Body>
    </Card>

    </Col>
    <Col className='mb-2' sm={6} lg={4}>
      <Card style={{ width: '18rem',minHeight:'250px' }}>
      <Card.Body>
        <Card.Title>🚀 SEO & Developer Friendly</Card.Title>
        <Card.Text>
          
           
 <span>React supports server-side rendering (SSR) and modern frameworks like Next.js, improving
  
  </span>  SEO and page load speed.
Developers also love its intuitive structure, reusable logic, and fast debugging tools.
        </Card.Text>
       
      </Card.Body>
    </Card>

    </Col>

   </Row>

    </Container>
  

    
    </>
  )
}

export default Feature1
