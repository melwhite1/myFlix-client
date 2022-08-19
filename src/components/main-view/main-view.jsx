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
          Genre: {
            Name: 'Action/Comedy',
            Description: 'A film or television programme which blends comedy with a lively plot and fast-paced action.'
          },
          Director: {
            Name: 'Akiva Schaffer',
            Bio: 'Akiva Schaffer was born on December 1, 1977 in Berkeley, California, USA. He is a writer and director, known for Popstar: Never Stop Never Stopping (2016), Saturday Night Live (1975) and The Lego Movie (2014). He has been married to Liz Cackowski since 2010. They have two children.'
          },
          ImagePath: 'https://www.pastposters.com/cw3/assets/product_full/R/hot-rod-cinema-quad-movie-poster-(3).jpg',
          Featured: true
        },
        {
          _id: '62e947861313799175eb09cd',
          Title: 'The Big Year',
          Description: 'Two bird enthusiasts try to defeat the cocky, cutthroat world record holder in a year-long bird-spotting competition that leads to adventure, friendship and hijinx!',
          Genre: {
            Name: 'Comedy',
            Description: 'Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment.'
          },
          Director: {
            Name: 'David Frankel',
            Bio: 'David Frankel is a production manager and producer, known for The Devil Wears Prada (2006), One Chance (2013) and Band of Brothers (2001).'
          },
          ImagePath: 'https://images.moviesanywhere.com/0368a1852d7b7c6cd1a8dcd11657dc95/01c2544f-8c25-4e37-8eee-7d8e6154a87f.jpg',
          Featured: false
        },
        {
          _id: '62e949c91313799175eb09ce',
          Title: 'Forgetting Sarah Marshall',
          Description: "Peter (Jason Segel) is a struggling musician who finds his world turned upside down when his TV celebrity girlfriend, Sarah Marshall (Kristen Bell), dumps him for a tragically hip rock star. It's the hysterically funny look at how far one man will go to forget a girl – and all the fun he finds along the way!",
          Genre: {
            Name: 'Comedy',
            Description: 'Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment.'
          },
          Director: {
            Name: 'Nicholas Stoller',
            Bio: 'Nicholas Stoller is an English-American screenwriter and director. He is known best for directing the 2008 comedy Forgetting Sarah Marshall, and writing/directing its 2010 spin-off/sequel, Get Him to the Greek. He also wrote The Muppets and directed the Seth Rogen comedy, Neighbors. He is a frequent creative partner of Jason Segel.'
          },
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