// UploadButton.js
"use client";
import React from "react";
import { supabase } from "@/lib/supabase";

const GenerateButton = ({ handleUpload, handleLoading, option, file}) => {
  const handleGenerateClick = async () => {
    if (file) {
      handleLoading(true);
      const imageFile = file;
      const api = "https://interior-api.azurewebsites.net/api/HttpTrigger";

      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("option", option);

      var requestOptions = {
        method: "POST",
        body: formData,
      };

      fetch(
        "https://interior-api.azurewebsites.net/api/HttpTrigger",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {handleUpload(result["link"]); handleLoading(false);})
        .catch((error) => {console.log("error", error); handleLoading(false)});
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
