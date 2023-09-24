import React from "react";
import { useSketchStore } from "@/store";

const Samples = () => {
  const setSketch = useSketchStore((state: any) => state.setSketch);

  const handleSelectSketch = async (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const img = event.currentTarget as HTMLImageElement;
    const selectedImagePath = img.src;
    console.log(selectedImagePath);
    const selectedImageBlob = await fetch(selectedImagePath).then((response) =>
      response.blob()
    );
    const url = new URL(selectedImagePath);
    const fileName = url.pathname.split("/").pop();
    const selectedImageFile = new File([selectedImageBlob], fileName!, {
      type: "image/png",
    });
    setSketch(selectedImageFile);
  };

  return (
    <div
      id="examples"
      className="sticky bottom-0 w-full h-content bg-[#f4f2f0] mt-36 text-center text-[#9A8172]"></div>
  );
};

export default Samples;
