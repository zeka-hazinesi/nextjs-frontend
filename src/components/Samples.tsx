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
      className="flex flex-row justify-between w-auto h-auto space-x-8">
      <div
        id="example1"
        className="relative w-[250px] h-[177px] border rounded-[25px] border-[#9A8172] hover:scale-[1.03] duration-500 ease-in-out cursor-pointer">
        <img
          src="./sketches/sketch-1.jpg"
          onClick={handleSelectSketch}
          className="rounded-[25px] object-cover w-full h-full"
        />
        <div className="absolute bottom-[0px] rounded-b-[25px] w-full bg-[#9A8172] px-4 py-1 bg-opacity-50 text-center">
          <p>Livingroom</p>
        </div>
      </div>
      <div
        id="example2"
        className="relative w-[250px] h-[177px] border rounded-[25px] border-[#9A8172] hover:scale-[1.03] duration-500 ease-in-out cursor-pointer">
        <img
          src="./sketches/sketch-2.png"
          onClick={handleSelectSketch}
          className="rounded-[25px] object-cover w-full h-full"
        />
        <div className="absolute bottom-[0px] rounded-b-[25px] w-full bg-[#9A8172] px-4 py-1 bg-opacity-50 text-center">
          <p>Livingroom</p>
        </div>
      </div>
      <div
        id="example3"
        className="relative w-[250px] h-[177px] border rounded-[25px] border-[#9A8172] hover:scale-[1.03] duration-500 ease-in-out cursor-pointer">
        <img
          src="./sketches/sketch-3.jpg"
          onClick={handleSelectSketch}
          className="rounded-[25px] object-cover w-full h-full"
        />
        <div className="absolute bottom-[0px] rounded-b-[25px] w-full bg-[#9A8172] px-4 py-1 bg-opacity-50 text-center">
          <p>Livingroom</p>
        </div>
      </div>
      <div
        id="example4"
        className="relative w-[250px] h-[177px] border rounded-[25px] border-[#9A8172] hover:scale-[1.03] duration-500 ease-in-out cursor-pointer">
        <img
          src="./sketches/sketch-4.jpg"
          onClick={handleSelectSketch}
          className="rounded-[25px] object-cover w-full h-full"
        />
        <div className="absolute bottom-[0px] rounded-b-[25px] w-full bg-[#9A8172] px-4 py-1 bg-opacity-50 text-center">
          <p>Bathroom</p>
        </div>
      </div>
      <div
        id="example5"
        className="relative w-[250px] h-[177px] border rounded-[25px] border-[#9A8172] hover:scale-[1.03] duration-500 ease-in-out cursor-pointer">
        <img
          src="./sketches/sketch-1.jpg"
          onClick={handleSelectSketch}
          className="rounded-[25px] object-cover w-full h-full"
        />
        <div className="absolute bottom-[0px] rounded-b-[25px] w-full bg-[#9A8172] px-4 py-1 bg-opacity-50 text-center">
          <p>Livingroom</p>
        </div>
      </div>
    </div>
  );
};

export default Samples;
