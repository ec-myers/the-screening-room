import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Container.scss';
import PropTypes from 'prop-types';

export const Container = ({ movies, updateFavorites, type }) => {
  const allMovies = movies.map((movie, index) => (
    <MovieCard
      key={index}
      type={type}
      movie={movie}
      updateFavorites={updateFavorites}
    />
  ));
  return <main className='Container'>{allMovies}</main>;
};

export default Container;

Container.propTypes = {
  movies: PropTypes.array,
  updateFavorites: PropTypes.func,
  type: PropTypes.string
};
