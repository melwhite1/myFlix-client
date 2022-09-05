import React from 'react';
import PropTypes from 'prop-types';
import {Card, Button} from 'react-bootstrap';
import axios from 'axios';

import { Link } from "react-router-dom";

import "./movie-view.scss";

class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className="movie-view">
        <Card.Header>
          <Card.Img variant="top" src={movie.ImagePath} />
        </Card.Header>
        <Card.Body className="movie-view-title">
          <h1>{movie.Title}</h1>
        </Card.Body>
        <Card.Body>
          <h4>Genre</h4>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <h4 className="genre-link link">{movie.Genre.Name}</h4>
          </Link>
        </Card.Body>
        <Card.Body>
          <h4>Director</h4>
          <Link to={`/directors/${movie.Director.Name}`}>
            <h4 className="director-link link">{movie.Director.Name}</h4>
          </Link>
        </Card.Body>
        <Card.Body>
          <h4>Description:</h4>
          {movie.Description}
        </Card.Body>

        <Card.Footer>
          <Button
            className="movie-view-button"
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default MovieView;
