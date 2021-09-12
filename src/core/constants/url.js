import { API_DOMAIN} from "../../config/settings";
import actionTypes from "./action-types";



export function getServiceURL({type}) {
  let API_URL = "";
  switch (type) {
    case actionTypes.GET_AUTH_TOKEN:
      API_URL = API_DOMAIN + `api/login`;
      break;

    default:
      break;
  }

  return API_URL ? API_URL : undefined;
}
