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
      className="m-3 h-[50px] w-[300px] flex items-center justify-center rounded-[15px] text-[#9A8172] border hover:bg-[#9A8172] duration-300 ease-in-out hover:text-[#f4f2f0] border-[#9A8172] bg-[#f4f2f0] cursor-pointer drop-shadow-[0_12px_8px_rgba(0,0,0,0.25)]"
      onClick={handleGenerateClick}>
      <p>reImagine</p>
    </div>
  );
};

export default GenerateButton;
