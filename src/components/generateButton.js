"use client";
import { useFileStore, useImgLoadingStore, useImgUrlStore, useOptionStore } from "@/store";
import React from "react";

const GenerateButton = () => {
  const file = useFileStore(state => state.file);
  const setImgLoading = useImgLoadingStore(state => state.setImgLoading);
  const setImgUrl = useImgUrlStore(state => state.setImgUrl);
  const option = useOptionStore(state => state.option);
  
  const handleGenerateClick = async () => {
    if (file) {
      setImgLoading(true)
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
        .then((result) => {setImgUrl(result["link"]); setImgLoading(false);})
        .catch((error) => {console.log("error", error); setImgLoading(false)});
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
