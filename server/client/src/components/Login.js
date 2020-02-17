import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col,
  Button,
  Form,
  Media} from 'react-bootstrap';
  import { Link } from 'react-router-dom';
  import Logo from '../assets/images/MYtineraryLogo.png';


class Login extends Component {
  // State

  //formFilled?

  render() {
    //Check if all fields are filled in

    // If formFilled is succes, submit to login
    
    return (
      <Container>
        <Media>
          <img className="logo" src={ Logo } alt="MYTinerary Logo" />
        </Media>
        <Form>
          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='email' type='email' placeholder='Email'/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='password' type='password' placeholder='Password' onChange={this.handleChange}/>
            </Col>
          </Form.Group>

          <Form.Group  as={Row}>
            <Col className="register-login" sm={{ span: 10, offset: 2 }}>
            <Button className="register-login-btn" type='submit'>Login</Button>
            </Col>
          </Form.Group>
        </Form>
        <div className="login-options">
          <div className="app-login">Or login with Google:</div>
          <Link className="google-login" to='/users/google'><Button  variant="danger">Google login</Button></Link>
        </div>
      </Container>
    );
  }
}

export default Login;
