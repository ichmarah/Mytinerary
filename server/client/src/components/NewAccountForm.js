import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col,
  Button,
  Form} from 'react-bootstrap';
  import { createUser } from '../store/actions/userActions';
  import { connect }  from 'react-redux';

const emailRegex = RegExp( 	
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const passwordRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/); 

const formValid = ({formErrors, ...rest}) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach(value => {
    value.length > 0 && (valid = false);
  });
  // Iterate over remaining values that are not part of formErrors. Prevents registering without any values.
  Object.values(rest).forEach(val => {
    val === null && (valid = false)
  })
  return valid;
}

class NewAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
      // avatar: null
      formErrors: {
        name: "",
        email: "",
        password: ""
      }
    }
    console.log(this.state);
  }

  // Validate input and set this.state (either with errorForms or correct user's input)
  handleChange = event => {
    event.preventDefault();

    const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    

    switch (name) {
      case 'name':
        formErrors.name = value.length < 2 ? 'Minimum of 2 characters required' : ''
        break;
        case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Invalid email address'
        break;
        case 'password': formErrors.password = passwordRegex.test(value) ? '': 'Minimum 8, must contain at least: 1 Uppercase Alphabet, at least 1 Lowercase Alphabet, 1 Number and 1 Special Character'
        break;
      default:
        break;
    }

    this.setState({formErrors, [name]: value}, () => console.log(this.state))
  }
  
  // If the validation is true, 
  handleSubmit = event => {
    event.preventDefault();

    if (formValid(this.state)) {
      const { name, email, password } = this.state;
      const newUser = { name, email, password }

      this.props.createUser(newUser)
      // Submit to MongoDB??

      console.log(`
        -- SUBMITTING --
        Username: ${name}
        Email: ${email}
        Password: ${password}
      `)
    } else {
      console.error('All fields are required');
    }
  }

  render() {
    const { formErrors } = this.state;
    
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId='formHorizontalName'>
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='name' type='text' placeholder="Name" onChange={this.handleChange}/>
              {formErrors.name.length > 0 &&(
                <span className="errorMessage">{formErrors.name}</span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='email' type='email' placeholder='Email' onChange={this.handleChange}/>
              {formErrors.email.length > 0 &&(
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control name='password' type='password' placeholder='Password' onChange={this.handleChange}/>
            {formErrors.password.length > 0 &&(
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col className="register-login" sm={{ span: 10, offset: 2 }}>
            <Button className="register-login-btn" type='submit'>Register</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
    // checked: state.users.checked,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (newUser) => dispatch(createUser(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountForm);
