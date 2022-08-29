import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Card, CardGroup, Container, Col, Row, Navbar, Nav } from 'react-bootstrap';

import './registration-view.scss';
import axios from 'axios';
import { Link } from "react-router-dom";

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');
    const [ values, setValues ] = useState({
      usernameErr: '',
      passwordErr: '',
      emailErr: '',
      birthdayErr: '',
    });

    const validate = () => {
      let isReq = true;
      if(!username){
       setValues({...values, usernameErr: 'Username Required'});
       isReq = false;
     }else if (username.length < 2){
       setValues({...values, usernameErr: 'Username must be 2 characters long' });
       isReq = false;
      }
      if(!password){
       setValues({...values, passwordErr:'Password Required'});
       isReq = false;
      }else if(password.length < 6){
       setValues({...values, passwordErr: 'Password must be 6 characters long'});
       isReq = false;
      }
      if(!email){
       setValues({...values, emailErr:'Email Required'});
       isReq = false;
     }else if(email.indexOf('@' === -1)){
       setValues({...values, emailErr: 'Email is invalid'});
       isReq = false;
      }
      if(!birthday){
       setValues({...values, birthdayErr:'Email Required'});
       isReq = false;
     }

      return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
      axios.post('https://melsflix.herokuapp.com/login', {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
      .then(response => {
        const data = response.data;
        console.log(data);
        alert('Registration succesful, continue to login!');
        window.open('/', '_self');
      })
      .catch(response => {
        console.error(response);
        alert('unable to register');
      });
    }
  };

    return (
      <Container fluid className="registerContainer text-center my-3 mx-12">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Header>Please Register</Card.Header>
                <Form>
                  <Form.Group>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type='text'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                    {values.usernameErr && <p>{values.usernameErr}</p>}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                    {values.passwordErr && <p>{values.passwordErr}</p>}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                    {values.emailErr && <p>{values.emailErr}</p>}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type='date'
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                  />
                    {values.birthdayErr && <p>{values.birthdayErr}</p>}
                </Form.Group>

                <Button  variant='primary' type='submit'onClick={handleSubmit}>Submit
                </Button>
              </Form>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }),
};
