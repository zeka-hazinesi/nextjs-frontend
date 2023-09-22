import { useImgLoadingStore, useImgUrlStore } from "@/store";
import React from "react";

const Output = () => {
  const imgLoading = useImgLoadingStore((state: any) => state.imgLoading);
  const uploadedImgUrl = useImgUrlStore((state: any) => state.imgUrl);

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
    <div
      id="output"
      className="h-[500px] w-[705px] flex justify-center items-center rounded-[25px] text-[24pt] text-[#9A8172] bg-[#3B3B3B] relative">
      {imgLoading ? (
        <div className="loading-indicator"></div>
      ) : (
        uploadedImgUrl && (
          <>
            <img
              src={uploadedImgUrl}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </>
        )
      )}
    </div>
  );
};

export default Output;
