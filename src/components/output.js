"use client";
import React from "react";

const OutputArea = (imageUrl) => {
  return (
    <div>
      Output:
      <div
        id="output-area"
        style={{
          width: "400px",
          height: "400px",
          border: "1px dashed #ccc",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {imageUrl && (
          <>
            <img
              src={imageUrl.imageUrl}
              style={{
                // Das Bild wird proportional zur Höhe des div skaliert
                objectFit: "contain",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default OutputArea;
