import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'
import '../style/Christmas.css'


export default class Christmas extends Component {
  render() {
    return (
      <div className='mt-5'>
        <Container className='d-flex justify-content-evenly'>
            <div className='img d-flex flex-column justify-content-end align-items-center'>
                <p>MERRY</p>
                <h1>Christmas 40% Off</h1>
                <Button variant="outline-dark" >Shop Now</Button>
            </div>
        <div className="bg-dark  bg-opacity-50">
            <Container className='con p-4 text-center '>
            <p>Your<br/>Next</p>
            
            <h1>Purchase<br/>10% Off</h1>
            
            <Button variant="outline-dark" className='mt-5'>Shop Now</Button>
            </Container>
        </div>
        </Container>
      </div>
    )
  }
}
