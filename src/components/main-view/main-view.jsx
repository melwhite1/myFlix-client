import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: '62e940071313799175eb09cc',
          Title: 'Hot Rod',
          Description: 'The film stars Andy Samberg as amateur stuntman Rod Kimble, whose stepfather, Frank (Ian McShane), continuously mocks and disrespects him. When Frank becomes ill, Rod raises money for his heart operation by executing his largest stunt yet.',
          Genre: 'Action/Comedy',
          Director: 'Akiva Schaffer',
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BNjYwNjA3OTY0Nl5BMl5BanBnXkFtZTcwNDMyNDUzMw@@._V1_.jpg',
          Featured: true
        },
        {
          _id: '62e947861313799175eb09cd',
          Title: 'The Big Year',
          Description: 'Two bird enthusiasts try to defeat the cocky, cutthroat world record holder in a year-long bird-spotting competition that leads to adventure, friendship and hijinx!',
          Genre: 'Comedy',
          Director: 'David Frankel',
          ImagePath: 'https://upload.wikimedia.org/wikipedia/en/f/fa/The_Big_Year_Poster.jpg',
          Featured: false
        },
        {
          _id: '62e949c91313799175eb09ce',
          Title: 'Forgetting Sarah Marshall',
          Description: "Peter (Jason Segel) is a struggling musician who finds his world turned upside down when his TV celebrity girlfriend, Sarah Marshall (Kristen Bell), dumps him for a tragically hip rock star. It's the hysterically funny look at how far one man will go to forget a girl – and all the fun he finds along the way!",
          Genre: 'Comedy',
          Director: 'Nicholas Stoller',
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BMTYzODgzMjAyM15BMl5BanBnXkFtZTcwMTI3NzI2MQ@@._V1_FMjpg_UX1000_.jpg',
          Featured: false
        },
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />))}
      </div>
    );
  }
}




// export default MainView; 