import React  from 'react'
import {  Card, Container, Row } from 'react-bootstrap'
import { BsCart } from "react-icons/bs";
import '../style/Shop.css'


export default function Shop (props) {
    
  
    return (
      <div>
        
        <div className='main'>
            <h1 className='fw-bold'>Shop</h1>
            <p><span className='text-white'>Home</span>/Shop</p>
        </div>
        <Container className='mt-5 '>
        <Row className='justify-content-center '>
        {props.products.map((e)=>{
          return(
            
            <Card style={{ width: '18rem' }} key={e.id} className="me-4 mb-4 p-2">
            <Card.Img variant="top" src={e.imgName} />
            <Card.Body>
              
              <Card.Text>{e.text}</Card.Text>
              <div>
                <p className='text-muted'>{e.price}.00$</p>
                
                <BsCart onClick={()=>{props.addProduct(e)}}/>
              </div>
            </Card.Body>
          </Card>
         
         ) })}
          </Row>
    </Container>
      </div>
    )
  
}
