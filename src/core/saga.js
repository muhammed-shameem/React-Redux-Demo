import { all, put, takeEvery } from 'redux-saga/effects';
import actionTypes from "./constants/action-types";
import { getServiceURL } from "./constants/url";
import {
    
  } from "../core/actions";

  export const getAsyncActionTypes = actionType => {
    if (typeof actionType !== "string") return;
  
    // const fetchingType = `${actionType}_REQUEST`;
    const successType = `${actionType}_SUCCESS`;
    const failureType = `${actionType}_FAILURE`;
  
    return {
      type: actionType,
      requestType: actionType,
      successType: successType,
      failureType: failureType
    };
  };

  export function* actionSuccess(action, response) {
    const { successType } = getAsyncActionTypes(action.type);
    yield put({ type: successType, data: response });
  }
  
  export function* actionFailure(action, error) {
    const { failureType } = getAsyncActionTypes(action.type);
    yield put({ type: failureType, error: error });
  }


  export function* validatedResponse(action, response) {
    // if (
    //   response &&
    //   (response?.status === 401 || response?.error === "invalid_token")
    // ) {
    //   yield put(sessionAunthorized(response));
    // }
  
    if (
      !response ||
      response.error ||
      !response.status ||
      response.status.code !== 1000
    ) {
      yield actionFailure(action, response);
    } else {
      yield actionSuccess(action, response);
    }
  }




function* userSignIn(action) {
    try{
        const response = yield fetch(getServiceURL(action), {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(action.data)
        });
        const responseData = yield response.json();
        yield validatedResponse(action, responseData);
        yield localStorage.setItem("session", JSON.stringify(responseData));
        yield localStorage.setItem("loginTime", JSON.stringify(new Date()));
        yield localStorage.setItem("progressOpen", true);
      console.log({ responseData });
    }
    catch(error){
        yield actionFailure(action, error);
    }
}

function* rootSaga() {
    yield all([
        takeEvery(actionTypes.GET_AUTH_TOKEN, userSignIn),
    ])
}

export default rootSaga;