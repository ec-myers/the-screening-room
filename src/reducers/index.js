import { combineReducers } from 'redux';
import { movies } from './movies';
import { wallpapers } from './wallpapers';
import { errMsg } from './errMsg';
import { setLoading } from './setLoading';
import { favorites } from './favorites';
import { setUser } from './user';
import { emailErrMsg } from './hasEmailErrMsg';
import { setRandomWallpaper } from './setRandomWallpaper';

const rootReducer = combineReducers({
  movies,
  wallpapers,
  errMsg,
  setLoading,
  favorites,
  emailErrMsg,
  user: setUser,
  setRandomWallpaper
});

export default rootReducer;
