const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const modules = {
  toolbar: [
    // [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    // ["bold", "italic", "underline", "strike", "blockquote"],
    ["bold", "underline"],
    [
      // { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    // ["link", "image", "video"],
    // ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export { modules, formats };
