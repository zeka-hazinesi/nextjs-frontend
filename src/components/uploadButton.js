// UploadButton.js
"use client";
import React from "react";
import { supabase } from "@/lib/supabase";

const UploadButton = ({ handleUpload, option, file }) => {
  const handleGenerateClick = async () => {
    if (file) {
      const imageFile = file;
      const { data, error } = await supabase.storage
        .from("image-bucket")
        .upload(imageFile.name, imageFile);

      if (error) {
        console.error("Fehler beim Hochladen des Bildes:", error.message);
      } else {
        console.log("Bild erfolgreich hochgeladen:", data);
        const imageUrl = await supabase.storage
          .from("image-bucket")
          .getPublicUrl(data.path);
        handleUpload(imageUrl.data.publicUrl);
      }
    } else {
      alert("Bitte wählen Sie eine Bilddatei aus.");
    }
  };

  return (
    <button
      id="generate"
      className="bg-black text-white px-5 py-2 rounded-full ml-4 mr-4"
      onClick={handleGenerateClick}
    >
      Generate
    </button>
  );
};

export default UploadButton;
