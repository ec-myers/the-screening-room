const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
const genreBaseUrl ='https://api.themoviedb.org/3/genre/';
const apiKey = '149174d30ba0677b5219f8786eaaaaa7';

export const getMovies = async () => {
  const response = await fetch(`${baseUrl}${apiKey}`)
  const data = await response.json();
  const results = data.results;
  const cleanedMovies = await results.map(async (result) => {
    const { adult, backdrop_path, genre_ids, title, overview, poster_path, release_date, vote_average } = result;
    return {
      rRated: adult,
      wallpaper: `${imageBaseUrl}${backdrop_path}`,
      genre: await getGenresData(genre_ids),
      title,
      overview,
      poster: `${imageBaseUrl}${poster_path}`,
      release_date,
      rating: vote_average,
      favorite: false
    }
  })
  return await Promise.all(cleanedMovies);
}

const getGenresData = async (genreIds) => {
  const genres = await genreIds.map(id => {
    return getGenres(id)
  })
  return await Promise.all(genres);
}

const getGenres = async (id) => {
  const response = await fetch(`${genreBaseUrl}${id}?api_key=${apiKey}`);
  const data = await response.json();
  return await data.name;
}