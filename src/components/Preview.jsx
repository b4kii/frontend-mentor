import React, { useRef, useState } from "react";

export default function Preview({ imageMobile, imageDesktop }) {
  const [isShown, setIsShown] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <>
      <div
        className={`previewOverlay ${click ? (isShown ? "in" : "out") : ""}`}
      >
        <div className="imageWrapper">
          <picture>
            <source media="(max-width: 1268px)" srcSet={imageMobile} />
            <img
              src={imageDesktop}
              alt="Preview image"
              className="previewImage"
            />
          </picture>
        </div>
      </div>
      <button
        className={`previewButton ${isShown && "active"}`}
        onClick={() => {
          setIsShown((prev) => !prev);
          setClick(true);
        }}
      >
        Preview
      </button>
    </>
  );
}
