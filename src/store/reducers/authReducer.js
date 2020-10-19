const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Logged in");
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_ERROR":
      console.log("Login error", action.err);
      return {
        ...state,
        authError: "Login Failed",
      };
    case "LOGOUT_SUCCESS":
      console.log("Logout ");
      return state
    default:
      return state;
  }
};

export default authReducer;
