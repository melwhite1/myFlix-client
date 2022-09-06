import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';

import './registration-view.scss';
import axios from 'axios';
import { Link } from "react-router-dom";

function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [birthday, setBirthday] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validate = () => {
        let isReq = true;
        if (!username) {
            setUsernameError("Username is required");
            isReq = false;
        } else if (username.length < 4) {
            setUsernameError("Username must be 5 characters long");
            isReq = false;
        }
        if (!password) {
            setPasswordError("Password is required");
            isReq = false;
        } else if (username.length < 4) {
            setPasswordError("Password must be 5 characters long");
            isReq = false;
        }
        if (!email) {
            setEmailError("Add Email");
            isReq = false;
        } else if (email.indexOf("@") === -1) {
            setEmail("Email must be a valid email address");
            isReq = false;
        }
        return isReq;
    };

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
      .catch((response) => {
        console.error(response);
        alert('unable to register');
      });
    }
  };

    return (
      <Container fluid className="registerContainer text-center my-3 mx-12">
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Please Register</Card.Title>
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
                </Card.Body>
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

export default RegistrationView;
