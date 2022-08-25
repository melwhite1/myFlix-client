import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, Container, Col, Row, Form } from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keyperess', this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container fluid className="movieViewContainer">
        <Row>
          <Col>
            <div className="movie-poster">
              <img src={movie.ImagePath} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-title">
              <span className="label">Title: </span>
              <span className="value">{movie.Title}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-description">
              <span className="label">Description: </span>
              <span className="value">{movie.Description}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-releaseyear">
              <span className="label">ReleaseYear: </span>
              <span className="value">{movie.ReleaseYear}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-runtime">
              <span className="label">RunTime: </span>
              <span className="value">{movie.RunTime}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-director">
              <span className="label">Director: </span>
              <span className="value">{movie.Director.Name}</span>
            </div>
            <div>{' Bio: ' + movie.Director.Bio}</div>
            <div>{' Birth: ' + movie.Director.Birth}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-genre">
              <span className="label">Genre: </span>
              <span className="value">{movie.Genre.Name} </span>
            </div>
            <div>{' Description: ' + movie.Genre.Description}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={() => {
                onBackClick(null);
              }}
            >
              Back
            </Button>
            <Button className="ml-2 my-2">Add to Favorites</Button>
            <Button className="ml-2">Remove from Favorites</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string.isRequired,
    RunTime: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
    }),
    ImagePath: PropTypes.string,
  }).isRequired,
};
