import React from "react";

function Note() {
  var title = "Title text";
  var content = "the content";
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Note;