"use client";
import React from "react";
import "./loading.css";
import { useImgLoadingStore, useImgUrlStore } from "@/store";

const OutputArea = () => {
  const imgLoading = useImgLoadingStore(state => state.imgLoading);
  const uploadedImgUrl  = useImgUrlStore(state => state.imgUrl);

  const handleDownload = () => {
    if (!uploadedImgUrl) return;
  
    const link = document.createElement("a");

  // Lädt das Bild als Blob herunter
    fetch(uploadedImgUrl)
    .then((response) => response.blob())
    .then((blob) => {
      // Setzt den Blob als HREF für den Link
      const url = window.URL.createObjectURL(blob);
      link.href = url;

      // Setzt den Dateinamen für den Download
      link.download = "download.png"; // Hier können Sie den Dateinamen anpassen

      // Klickt auf den Link, um das Herunterladen zu starten
      link.click();

      // Entfernt das Blob-URL-Objekt nach dem Herunterladen
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
      <span>Output:</span>
      <button onClick={handleDownload} >Download</button>
      </div>
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
        {imgLoading ? (
          <div className="loading-indicator"></div>
          ) : uploadedImgUrl && (
          <>
            <img
              src={uploadedImgUrl}
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
