const initState = {
  notes: [
    // {
    //   id: "1",
    //   title: "First notes",
    //   desc: "descrip - 1",
    //   arrayPosition: "1",
    //   data: {
    //     blocks: [
    //       {
    //         type: "header",
    //         data: {
    //           text: "1st note",
    //           level: 2,
    //         },
    //       },
    //       {
    //         type: "paragraph",
    //         data: {
    //           text:
    //             "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
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
    default:
      return state;
      
  }

};

export default notesReducer;
