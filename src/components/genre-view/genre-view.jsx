import React from "react";
import PropTypes from 'prop-types';
import { Card, Button, Container, } from 'react-bootstrap';
import "./genre-view.scss";

class GenreView extends React.Component {
  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Container>
        <Card className="genre-view">
          <Card.Header className="genre-view-header">Genre</Card.Header>
          <Card.Body className="genre-view-title">{genre.Name}</Card.Body>
          <Card.Body>{genre.Description}</Card.Body>
          <Card.Footer>
            <Button onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
};

export default GenreView;
