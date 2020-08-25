const initState = {
  notes: [
    {
      id: 1,
      data: {
        blocks: [
          {
            type: "header",
            data: {
              text: "1st note",
              level: 2,
            },
          },
          {
            type: "paragraph",
            data: {
              text:
                "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
            },
          },
        ],
      },
    },

    {
      id: 2,
      data: {
        blocks: [
          {
            type: "header",
            data: {
              text: "2nd note",
              level: 2,
            },
          },
          {
            type: "paragraph",
            data: {
              text:
                "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
            },
          },
        ],
      },
    },

    {
      id: 3,
      data: {
        blocks: [
          {
            type: "header",
            data: {
              text: "3rd note",
              level: 2,
            },
          },
          {
            type: "paragraph",
            data: {
              text:
                "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
            },
          },
        ],
      },
    },
  ],
};

const notesReducer = (state = initState, action) => {
  return state;
};

export default notesReducer;
