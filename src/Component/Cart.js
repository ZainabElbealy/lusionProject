import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { GrAlert } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import '../style/Cart.css'


export default function Cart (props) {
let choose=props.choose.filter((e)=>{
  return e.count>0
})

  let cal=0;

  choose.map((e)=>{
    
   return cal=cal+(e.price*e.count)

    
  })
  


// let calculation =props.cal
 // const location = useLocation();
  //console.log(location.state)
    return (
      <div>
        
        <Container className='mt-5 '>
        <Row className='justify-content-center '>
        {choose.map((e)=>{
          return(
            
            <Card style={{ width: '18rem' }} key={e.id} className="me-4 mb-4 p-2">
            <Card.Img variant="top" src={e.imgName} />
            <Card.Body>
              
              <Card.Text>{e.text}</Card.Text>
              <div>
                <p className='text-muted'>{e.price}.00$</p>
                <h1>{e.count}</h1>
              </div>
              <div className='d-flex justify-content-evenly'>
                <Button onClick={()=>{props.addProduct(e)}}>+</Button>
                <Button onClick={()=>{props.decrement(e)}}>-</Button>
                <Button onClick={()=>{props.myDelete(e)}}>delete</Button>
              </div>
            </Card.Body>
          </Card>
           ) })}
          </Row>
          </Container>
        <div>
          
      <div className='Cart bg-dark text-dark bg-opacity-50 text-center d-flex flex-column justify-content-evenly'>
        <div className='d-flex justify-content-center'>
            <h1>Your Cart Is Empty</h1>
            <GrAlert />
        </div>
        <div className=' d-flex justify-content-center'>
            <Button variant="dark " >Get Total Price</Button>
            <h3 className='ms-2'>Total Price : {cal}</h3>
        </div>
        <Link to='/Shop'className='text-dark text-decoration-none'><h1 >Continue Shopping</h1></Link>
      </div>
      </div>
      </div>
    )
  
}
