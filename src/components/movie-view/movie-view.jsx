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
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="title">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="description">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
      <div className="movie-genre">
        <span className="genre">Genre: </span>
        <span className="value">{movie.Genre.Name}</span>
      </div>
      <div className="genre-description">
        <span className="genre">Description: </span>
        <span className="value">{movie.Genre.Description}</span>
      </div>
      <div className="movie-director">
        <span className="director">Director: </span>
        <span className="value">{movie.Director.Name}</span>
      </div>
      <div className="director-bio">
        <span className="director">Bio: </span>
        <span className="value">{movie.Director.Bio}</span>
      </div>
      <button onClick={() => { onBackClick(null); }}>Back</button>

    </div>
    );
  }
}
