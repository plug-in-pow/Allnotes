const initState = {
  notesMetaData: [],
};

const notesReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      console.log("created note", action.notesMetaData);
      return state;
    case "CREATE_NOTE_ERR":
      console.log("create note error", action.err);
      return state;
    case "UPDATE_NOTE":
      console.log("updated note", action.note);
      return state;
    case "UPDATE_NOTE_ERR":
      console.log("updated note", action.err);
      return state;
    case "DELETE_NOTE":
      console.log("deletion status note", action.message);
      return state;
    case "DELETE_NOTE_ERR":
      console.log("delete note", action.err);
      return state;
    default:
      return state;
  }
};

export default notesReducer;
