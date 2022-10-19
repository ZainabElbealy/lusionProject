import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';

import BestSelling from './BestSelling'
import Christmas from './Christmas';
import ControlledCarousel from './ControlledCarousel'
import Fifth from './Fifth';
import ProductsSections from './ProductsSections'

export default class Home extends Component {

  
  render() {
    
    return (
      <Fragment>
        
        <ControlledCarousel/>
        <Container className='mt-5 d-flex' >
        {this.props.sections.map((e)=>(
          
           <ProductsSections key={e.id} element={e}/>
           
        ))}
      </Container>
      <Container className="mt-5">
        <h1>Best Selling</h1>
        </Container>
        <Container>
        <Row className='justify-content-center'>
        {this.props.selling.map((e)=>(
          
          <BestSelling  key={e.id} element={e}/>
          
       ))}
        </Row>
        </Container>
        <Christmas/>
        <Fifth/>
      </Fragment>
    )
    }
}

