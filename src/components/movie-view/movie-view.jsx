import React from 'react'

export class MovieView extends React.Component {

  keypressCallback(event) {
     console.log(event.key);
   }

   componentDidMount() {
     document.addEventListener('keypress', this.keypressCallback);
   }

   componentWillUnmount() {
     document.removeEventListener('keypress', this.keypressCallback);
   }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container fluid className="movieViewContainer">
        <Row>
          <Col>
            <div className="movie-view">
              <img src={movie.ImagePath} />
            </div>
          </Col>
       </Row>
       <Row>
         <Col>
          <div className="movie-title">
            <span className="title">Title: </span>
            <span className="value">{movie.Title}</span>
          </div>
        </Col>
       </Row>
       <Row>
         <Col>
          <div className="movie-description">
            <span className="description">Description: </span>
            <span className="value">{movie.Description}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="movie-genre">
            <span className="genre">Genre: </span>
            <span className="value">{movie.Genre.Name}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="genre-description">
            <span className="genre">Description: </span>
            <span className="value">{movie.Genre.Description}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="movie-director">
            <span className="director">Director: </span>
            <span className="value">{movie.Director.Name}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="director-bio">
            <span className="director">Bio: </span>
            <span className="value">{movie.Director.Bio}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => { onBackClick(null); }}>Back</Button>
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
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
    }),
    ImagePath: PropTypes.string,
  }).isRequired,
};
