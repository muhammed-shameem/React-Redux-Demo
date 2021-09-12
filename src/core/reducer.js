import { combineReducers } from 'redux';
import actionTypes from "./constants/action-types";
// reducers
import signinData from './reducers/signin-reducer';


export const initialState = {};

export const appRootReducer = combineReducers({
  signin: signinData,
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.USER_LOGOUT) {
    state = undefined;
  }

  return appRootReducer(state, action);
};

export default rootReducer;
