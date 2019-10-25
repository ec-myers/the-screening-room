export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
});

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
});

export const hasErrored = errMsg => ({
  type: 'HAS_ERROR',
  errMsg
});

export const addFavorite = newFavorite => ({
  type: 'ADD_FAVORITE',
  newFavorite
});

export const setUser = user => ({
  type: 'USER',
  user
})
