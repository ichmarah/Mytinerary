
import React, { Component } from 'react';
import { 
  Container,
  Media} from 'react-bootstrap';
import NewAccountForm from './NewAccountForm';
// import { connect } from 'react-redux';
import Image from '../assets/images/avatar.png';
import Avatar from 'react-avatar'; // Installed Avatar for React via npm


class Create extends Component {
  render() {
    return (
      <Container>
        <Media>
          <Avatar className='avatar' size='100' round={true} src={Image} />
        </Media>
        <NewAccountForm />
      </Container>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

// export default connect(null, mapDispatchToProps)(Create);
export default Create;

