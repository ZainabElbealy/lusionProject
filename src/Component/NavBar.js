import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';



export default class NavBar extends Component {
   
  render() {
    let Choose=this.props.choose.filter((e)=>{
      return e.count>0;
  
     })
     
     let Choosee=Choose.length
     
    //console.log(this.Choose)
    return (
      <Navbar bg='dark' >
        <Container >
         <Navbar.Brand> <Link to='/' className='text-warning text-opacity-75 text-decoration-none'>Home</Link></Navbar.Brand>
          <Navbar.Brand><Link to='/Shop' className='text-warning text-opacity-75 text-decoration-none'>Shop</Link></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand  className='fw-bold font-monospace text-warning text-opacity-75'>Lusion</Navbar.Brand>
            <Navbar.Text >
              <div>
              <Link to='/Cart'>
              <AiOutlineShopping className='text-warning text-opacity-75'/>
            <Badge bg={Choosee > 0 ? "success":"danger"} className='text-warning text-opacity-75' >{Choosee}</Badge>
            </Link>
            </div> 
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}



 