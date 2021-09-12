import actionTypes from "./constants/action-types";

export const createAction = actionType => payload => ({
    type: actionType,
    data: payload
  });

  export const userSignIn = createAction(actionTypes.GET_AUTH_TOKEN);

  export const userLogOut = createAction(actionTypes.USER_LOGOUT);