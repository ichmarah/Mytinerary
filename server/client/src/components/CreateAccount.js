
import React, { Component } from 'react';
import { 
  Container,
  Media,
  Image} from 'react-bootstrap';
import NewAccountForm from './NewAccountForm';
import { connect } from 'react-redux';
import Avatar from 'react-avatar'; // Installed Avatar for React via npm
import { UserProfilePicture } from '../assets/images/avatar.png'

class Create extends Component {
  render() {
    return (
      <Container>
        <Media>
          <Avatar className='avatar' size='100' round={true} src='https://pngimage.net/wp-content/uploads/2018/06/user-flat-png-4.png' />
        </Media>
        <NewAccountForm />
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(Create);

