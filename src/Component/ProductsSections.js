import React, { Component } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../style/ProductsSections.css'

export default class ProductsSections extends Component {
  
  render() {
    //console.log(this.props.element)
  return (
    <Container  className='img1'>
            <CardGroup className='sec' >
          <Card key={this.props.element.id} className='card'>
        <Card.Img variant="top" src={this.props.element.imgName}/>
        <Card.Body className='body'>
          <Card.Title className='title'>{this.props.element.text}</Card.Title>
          <Card.Text className='item'>
            items {this.props.element.items}
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
      </Container>
  );
}
}