import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { setMovies, setUser } from '../../actions/actions';

import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';

import NavBar  from '../navbar/navbar';
import LoginView  from '../login-view/login-view';
import RegistrationView from '../registration-view/registration-view';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import DirectorView from "../director-view/director-view";
import GenreView from "../genre-view/genre-view";
//import ProfileView from '../profile-view/profile-view';
import MoviesList from '../movies-list/movies-list';

import './main-view.scss';

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.props.setUser({
        user: localStorage.getItem('user'),
      });
      this.getMovies(accessToken);
    }
  }

  setSelectedMovie(newSelectedMovie) {
  this.setState({
    selectedMovie: newSelectedMovie,
  });
}

  getMovies(token) {
    axios.get('https://melsflix.herokuapp.com//movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      this.props.setMovies(response.data);
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.setUser({
    user: null,
  });
  window.open("/", "_self");
}

render() {
  let { movies, user } = this.props;
  let localUser = localStorage.getItem('user');

  return (
      <Router>
        <NavBar user={user} />
        <Row className="main-view justify-content-md-center">
          <Route
            exact
            path="/"
            render={() => {
              if (!user)
                return (
                  <Row>
                    <Col>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  </Row>
                );
              if (movies.length === 0)
                return <div className="main-view">Loading...</div>;
              return <MoviesList movies={movies} />;
            }}
          />

          <Route
            path="/register"
            render={() => {
              if (user) return <Redirect to="/" />;
              return (
                <Col>
                  <RegistrationView />
                </Col>
              );
            }}
          />

          <Route
            path="/movies/:movieId"
            render={({ match, history }) => {
              console.log(user);
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
              s;
            }}
          />

          <Route
            path="/directors/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <DirectorView
                    movies={movies}
                    director={
                      movies.find((m) => m.Director.Name === match.params.name)
                        .Director
                    }
                    directorMovies={movies.filter(
                      (m) => m.Director.Name === match.params.name
                    )}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route
            path="/genre/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={10}>
                  <GenreView
                    genre={
                      movies.find((m) => m.Genre.Name === match.params.name)
                        .Genre
                    }
                    genreMovies={movies.filter(
                      (m) => m.Genre.Name === match.params.name
                    )}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route
            path={`/users/${user}`}
            render={({ history }) => {
              if (!localUser) return <Redirect to="/" />;
              return (
                <Col>
                  <ProfileView
                    user={user}
                    movies={movies}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route
            path="/users-update/"
            render={({ history }) => {
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <UpdateView
                    user={user}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
        </Row>
      </Router>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movies: state.movies,
    user: state.user,
  };
};

export default connect(mapStateToProps, { setMovies, setUser })(MainView)
