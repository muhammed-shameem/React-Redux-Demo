import React from "react";
import { Route } from "react-router-dom";
// import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// // context
// import { useUserState } from "crust/context/UserContext";

function PublicRoute({ component: Component, ...rest }) {
  //var { isAuthenticated, isRegisterFinished } = useUserState();
  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />;
      }}
    />
  );
}

export default PublicRoute;


