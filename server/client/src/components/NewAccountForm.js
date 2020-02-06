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

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(value => {
    value.length > 0 && (valid = false);
  });
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
  }

  handleSubmit = event => {
    event.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
        -- SUBMITTING --
        Username: ${`this.state.name`}
        Email: ${`this.state.email`}
        Password: ${`this.state.password`}
      `)
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  }

  handleChange = event => {
    event.preventDefault();

    const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    

    switch (name) {
      case 'name':
        formErrors.name = 
          value.length < 2 
          ? 'Minimum of 2 characters required'
          : ''
        break;
        case 'email':
        formErrors.email = 
          emailRegex.test(value) 
          ? ''
          : 'Invalid email address'
        break;
        case 'password':
        formErrors.password = 
        passwordRegex.test(value) 
        ? ''
        : 'Minimum 8, must contain at least: 1 Uppercase Alphabet, at least 1 Lowercase Alphabet, 1 Number and 1 Special Character'
        break;
    
      default:
        break;
    }

    this.setState({formErrors, [name]: value}, () => console.log(this.state))
  }

  
  

  // If message coming from express-validator is not equal to null, set the State to msg: error.msg
  // async componentDidMount() {
  //   const { msg } = this.props;
  //   const { error } = { msg };
  //   if (msg !== null) {
  //     this.setState ({ msg: error })
  //   } 
  //   else { this.setState ({ msg: null })}
  // }


  // handleChange = (event) => {
  //   event.preventDefault();
  //   const { users, remember } = this.state; //checked is removed
  //   this.setState = {
  //     [event.target.name]: event.target.value,
  //     // checked: event.target.checked
  //   }
  //   const newUser = { users, remember } //checked is removed
  //   createUser(newUser);
  //   console.log('After clicking register', newUser)
    
  // }

  // handleSubmit = ( event) => {
  //   event.preventDefault();
  //   const { users, remember } = this.state; //checked is removed
  //   const newUser = { users, remember } //checked is removed
  //   createUser(newUser);
  //   console.log('After clicking register', newUser)
  // }

  render() {
    // const { name, email, password } = this.state;
    
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId='formHorizontalName'>
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='name' type='text' placeholder="Name" onChange={this.handleChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='email' type='email' placeholder='Email' onChange={this.handleChange}/>
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

const mapStateToProps = state => {
  return {
    users: state.users.users,
    // checked: state.users.checked,
    msg: state.users.msg
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: () => dispatch(createUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountForm);
