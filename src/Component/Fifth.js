import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../style/Fifth.css'
import fifth1 from '../Photos/fifth1.jpg'
import fifth2 from '../Photos/fifth2.jpg'
import fifth3 from '../Photos/fifth3.jpg'
import fifth4 from '../Photos/fifth4.jpg'
import fifth5 from '../Photos/fifth5.jpg'
import fifth6 from '../Photos/fifth6.jpg'

export default class Fifth extends Component {
  render() {
    return (
      <Container className='d-flex container1'>
        
        <Container className='pic m-5 container1 '>
        <Row>
        <Col className='col'><img src={fifth1} alt='error'/></Col>
        <Col ><img src={fifth2} alt='error'/></Col>
      </Row>
      <Row>
        <Col><img src={fifth3} alt='error'/></Col>
        <Col><img src={fifth4} alt='error'/></Col>
      </Row>
      <Row>
        <Col><img src={fifth5} alt='error'/></Col>
        <Col><img src={fifth6} alt='error'/></Col>
      </Row>
      </Container>
        
        
        <Container className='txt d-flex flex-column justify-content-around mt-5 align-items-center'>
        <h1>Successfully</h1>
        <p>Note that the development build is not optimized.<br/>
        To create a production build, use npm run build.<br/>
        Note that the development build is not optimized.<br/>
        To create a production build , use npm run build.</p>
        <h1>& Network</h1>
        </Container>
      </Container>
    )
  }
}
