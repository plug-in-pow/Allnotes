const initState = {
  notes: [
    {
      id: "1",
      title:"First notes",
      desc:"descrip - 1",
      arrayPosition : "1",
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
      id: "2",
      title:"Second notes",
      desc:"descrip - 2 losdffsdsdsd",
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
      id: "3",
      title:"Third notes",
      desc:"descrip - 3 klASFLksadcf.ms",
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
