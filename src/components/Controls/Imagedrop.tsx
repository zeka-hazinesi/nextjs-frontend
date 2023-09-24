import { useFileStore, useSketchStore } from "@/store";
import { url } from "inspector";
import React, { useEffect, useRef, useState } from "react";

const Imagedrop = () => {
  const setFile = useFileStore((state: any) => state.setFile);
  const sketch = useSketchStore((state: any) => state.sketch);
  const [droppedImage, setDroppedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Wenn sich der Sketch ändert, aktualisieren Sie das Bild im Drag-and-Drop-Feld
    if (sketch) {
      setFile(sketch);
      handleImageUpload(sketch);
    }
  }, [sketch]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    handleImageUpload(e.dataTransfer.files[0]);
  };

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setFile(file);
    handleImageUpload(file);
  };

  const handleImageUpload = (file: File) => {
    if (file) {
      // Überprüfe, ob die Datei ein Bild ist (z.B. anhand des Dateityps)
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          setDroppedImage(e.target!.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert("Bitte lade nur Bilder hoch.");
      }
    }
  };

  return (
    <div
      id="imageDrop"
      className="m-3 h-[219px] w-[300px] flex flex-col items-center justify-center rounded-[15px] text-[#3B3B3B] border border-[#9A8172] bg-[#f4f2f0] c-white relative drop-shadow-[0_12px_8px_rgba(0,0,0,0.25)] hover:scale-[1.02] duration-500 ease-in-out"
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      {droppedImage ? (
        <img
          src={droppedImage as string}
          alt="uploaded Image"
          className="rounded-[15px] object-cover w-full h-full"
        />
      ) : (
        <div className="flex flex-col items-center">
          <img
            src="file.svg"
            alt="default Image"
            className="rounded-[15px] object-cover w-[100px]"
          />
          <p id="text" className={droppedImage ? "invisible" : ""}>
            Upload or drop a file
          </p>
        </div>
      )}
      <input
        id="upload-image"
        type="file"
        accept="image/*"
        onChange={handleImageInputChange}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        ref={fileInputRef}
      />
      <button
        onClick={() => {
          fileInputRef.current?.click();
        }}
        className="absolute w-full h-full border-none p-0 bg-none cursor-pointer "></button>
    </div>
  );
};

export default Imagedrop;
