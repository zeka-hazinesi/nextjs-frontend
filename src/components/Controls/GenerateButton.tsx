import {
  useFileStore,
  useImgLoadingStore,
  useImgUrlStore,
  useOptionStore,
} from "@/store";
import React from "react";

const GenerateButton = () => {
  const file = useFileStore((state: any) => state.file);
  const setImgLoading = useImgLoadingStore((state: any) => state.setImgLoading);
  const setImgUrl = useImgUrlStore((state: any) => state.setImgUrl);
  const option = useOptionStore((state: any) => state.option);

  const handleGenerateClick = async () => {
    if (file) {
      setImgLoading(true);
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
        .then((result) => {
          setImgUrl(result["link"]);
          setImgLoading(false);
        })
        .catch((error) => {
          console.log("error", error);
          setImgLoading(false);
        });
    }
  };

  return (
    <div
      id="generate"
      className="m-4 h-[50px] w-[300px] flex items-center justify-center rounded-[15px] text-white bg-[#9A8172] cursor-pointer"
      onClick={handleGenerateClick}>
      <p>reImagine</p>
    </div>
  );
};

export default GenerateButton;
