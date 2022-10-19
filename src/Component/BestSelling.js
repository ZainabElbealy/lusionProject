import React, { Component } from 'react'
import { Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';


export default class BestSelling extends Component {
  
  render() {
  return ( 
            <Card style={{ width: '11rem' }}key={this.props.element.id} className="ms-2 mb-2">
            <Card.Img variant="top" src={this.props.element.imgName} />
            <Card.Body>
              
              <Card.Text>{this.props.element.text}</Card.Text>
              <div>
                <p className='text-muted'>{this.props.element.price}.00$</p>
                <Link to='/Shop'><Button variant="outline-secondary">Shop Now</Button></Link>
              </div>
            </Card.Body>
          </Card>

          
    
  );
}
}
