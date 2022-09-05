import React from "react";
import PropTypes from 'prop-types';
import { Card, Button, Container } from 'react-bootstrap';
import "./director-view.scss";

class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;

    return (
      <Container>
        <Card className="dir-view">
          <Card.Header className="dir-view-header">Director</Card.Header>
          <Card.Body className="dir-view-title">{director.Name}</Card.Body>
          <Card.Body>{director.Bio}</Card.Body>
          <Card.Footer>
            <Button onClick={() => {onBackClick(null); }}>Back</Button>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
  }).isRequired,
};
export default DirectorView;
