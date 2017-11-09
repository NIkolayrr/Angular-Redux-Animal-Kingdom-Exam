import {combineReducers} from 'redux';
import {IAppState} from './app.state';

import {coreReducer} from './core/core.reducer';
import {statsReducer} from './stats/stats.reducer';
import {usersReducer} from './users/users.reducer';
import {animalsReducer} from './animals/animals.reducer';

export const reducer = combineReducers<IAppState>({
  core: coreReducer,
  stats: statsReducer,
  users: usersReducer,
  animals: animalsReducer
});
