import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 purple">
        {"This Magic Brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="center form  pa4 br3 shadow-5">
          <input type="text" className="f4 pa2 w-70 center" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-purple">
            detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;