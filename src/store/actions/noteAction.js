export const createNote = (data) => {
  return (dispatch, getState) => {
    // make async call to db
    dispatch({ type: "CREATE_NOTE", data });
  };
};

export const updateNote = (note) => {
    return (dispatch, getState) => {
      // make async call to db
      dispatch({ type: "UPDATE_NOTE", note });
    };
  };
