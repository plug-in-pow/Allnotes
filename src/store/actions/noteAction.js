export const createNote = (notesMetaData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db

    const firestore = getFirestore();
    firestore
      .collection("notesMetaData")
      .add({
        notesId: 1234,
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

export const updateNote = (note) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db

    // const firestore = getFirestore();
    // firestore
    //   .collection("notesMetaData")
    //   .add({
    //     notesId: 1234,
    //     ...notesMetaData,
    //     createdAt: new Date(),
    //     lastEdited: new Date(),
    //     data: {},
    //   })
    //   .then(() => {
    //     dispatch({ type: "UPDATE_NOTE", note });
    //   })
    //   .catch((err) => {
    //     dispatch({ type: "UPDATE_NOTE_ERR", err });
    //   });

      dispatch({ type: "UPDATE_NOTE", note });
  };
};
