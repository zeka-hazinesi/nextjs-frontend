// UploadButton.js
"use client";
import React from "react";
import { supabase } from "@/lib/supabase";

const GenerateButton = ({ handleUpload, option, file }) => {
  const handleGenerateClick = async () => {
    if (file) {
      const imageFile = file;
      const api = "https://interior-api.azurewebsites.net/api/HttpTrigger";

      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      const formData = new FormData();
      formData.append("file", imageFile);
      // formData.append("option", option);

      var requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
      };

      await fetch(
        "https://interior-api.azurewebsites.net/api/HttpTrigger",
        requestOptions
      )
        .then((response) => console.log(response.json()))
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
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

export default GenerateButton;
