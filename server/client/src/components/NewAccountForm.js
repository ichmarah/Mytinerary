import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col,
  Button,
  Form} from 'react-bootstrap';

class NewAccountForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    remember: false,
    message: null
  }

  handleChange = (event) => {
    this.setState = {
      [event.target.name]: event.target.value,
      remember: event.target.value
    }
  }

  // handleSubmit = ( event) => {
  //   event.preventDefault();
  // }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group as={Row} controlId='formHorizontalName'>
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='name' type='text' onChange={this.handleChange} placeholder="Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='email' type='email' onChange={this.handleChange} placeholder='Email' />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control name='password' type='password' onChange={this.handleChange} placeholder='Password' />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} controlId='formHorizontalCheck'>
            <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label='Remember me' checked={this.state.remember} onChange={this.handleChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
            <Button type='submit'>Register</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default NewAccountForm;