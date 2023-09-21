import { useFileStore, useSketchStore } from "@/store";
import React, { useEffect, useRef, useState } from "react";

const Imagedrop = () => {
    const setFile = useFileStore((state: any) => state.setFile);
    const sketch = useSketchStore((state: any) => state.sketch);
    const [droppedImage, setDroppedImage] = useState<string | ArrayBuffer | null>(null);
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


    return(
        <div
              id="imageDrop"
              className="m-4 h-[219px] w-[300px] flex items-center justify-center rounded-[15px] text-white bg-[#3B3B3B] c-white"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              >
                {droppedImage &&
                    <img 
                    src={droppedImage as string}
                    alt="uploaded Image"
                    className="object-contain" />
                }
             <input
          id="upload-image"
          type="file"
          accept="image/*"
          onChange={handleImageInputChange}
          style={{
            position: "absolute",

            width: "50%",
            height: "50%",
            opacity: "0",
            cursor: "pointer",
          }}
          ref={fileInputRef}
        /><button
        onClick={() => { fileInputRef.current?.click();  }}
        style={{
            position: "absolute",

            width: "50%",
            height: "50%",
            border: "none",
            padding: "0",
            background: "none",
            cursor: "pointer",
        }}
      ></button>
            </div>
    )
}

export default Imagedrop;