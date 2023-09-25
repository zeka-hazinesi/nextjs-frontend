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
    <div id="output" className="flex w-2/3 justify-center items-center">
      <div
        id="output"
        className="md:h-[350px] lg:h-[500px] xl:h-[700px] md:w-[490px] lg:w-[700px] xl:w-[980px] flex-auto max-w-full h-[250px] w-[350px] flex justify-center items-center rounded-[25px] border hover:scale-[1.01] cursor-pointer duration-500 ease-in-out border-[#9A8172] text-[#9A8172] bg-[#f4f2f0] relative">
        {imgLoading ? (
          <div className="loading-indicator "></div>
        ) : (
          uploadedImgUrl && (
            <>
              <img
                src={uploadedImgUrl}
                className="w-full h-full object-cover rounded-[25px]"
              />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Output;
