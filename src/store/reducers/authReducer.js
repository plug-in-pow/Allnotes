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
        authError: action.err.message,
      };

    case "LOGOUT_SUCCESS":
      console.log("Logout ");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("Signup successfully ");
      return {
        ...state,
        authError: null,
      };

      case "SIGNUP_ERROR":
        console.log("Signup error ");
        return {
          ...state,
          authError: action.err.message,
        };

    default:
      return state;
  }
};

export default authReducer;
