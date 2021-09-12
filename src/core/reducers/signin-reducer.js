import actionTypes from "../constants/action-types";


function signinData(state = [], action) {
  console.log('reducer',action);
  const data=action.data;
  console.log('type :',action.type,'data : ',data);
  switch (action.type) {
    case actionTypes.GET_AUTH_TOKEN_SUCCESS:
      console.log('success',data);
      return { ...state, data };
    case actionTypes.GET_AUTH_TOKEN_FAILURE:
      console.log('failure',data);
      return { ...state, data };
    default:
      return state;
  }
}

export default signinData;
