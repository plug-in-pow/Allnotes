export const createNote = (notesMetaData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId =  getState().firebase.auth.uid;

    firestore
      .collection("notesMetaData")
      .add({
        authorId: authorId,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        ...notesMetaData,
        createdAt: new Date(),
        lastEdited: new Date(),
        data: {},
      })
      .then(() => {
        dispatch({ type: "CREATE_NOTE", notesMetaData });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_NOTE_ERR", err });
      });
  };
};

export const updateNote = (note,id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db

    const firestore = getFirestore();
    var data = {};
    if (note.blocks.length !== 0){
      data = note;
    }
    firestore
      .collection("notesMetaData")
      .doc(id)
      .update({
        data: data,
        lastEdited: new Date(),
      })
      .then(() => {
        dispatch({ type: "UPDATE_NOTE", note });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_NOTE_ERR", err });
      });
  };
};

export const deleteNote = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db

    const firestore = getFirestore();
    const message = "Deleted"
    firestore
      .collection("notesMetaData")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_NOTE", message });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_NOTE_ERR", err });
      });
  };
};
