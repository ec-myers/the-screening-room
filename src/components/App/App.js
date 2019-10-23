import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import Container from '../Container/Container';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import { getMovies } from '../../apiCalls/apiCalls';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount = async () => {
    try {
      this.setState({ movies: await getMovies() });
    } catch {
      this.setState({ movies: [] });
    }
    console.log(this.state.movies);
  }

  render() {
    return (
      <>
        <h1>Screening Room</h1>
        <Nav />
        <LoginForm />
        <Container />
        <SelectedMovie />
      </>
    );
  }
}

export default App;
