import React from "react";
import { useSketchStore } from "@/store";

const Samples = () => {
    const setSketch = useSketchStore((state: any) => state.setSketch);

    const handleSelectSketch = async (event: React.MouseEvent<HTMLDivElement>) => {
        const img = event.currentTarget as HTMLImageElement;
        const selectedImagePath = img.src;
        console.log(selectedImagePath)
        const selectedImageBlob = await fetch(selectedImagePath).then(response => response.blob());
        const url = new URL(selectedImagePath);
        const fileName = url.pathname.split('/').pop();
        const selectedImageFile = new File([selectedImageBlob], fileName!, { type: 'image/png' });
        setSketch(selectedImageFile);
    }

    return (
        <div
          id="examples"
          className="flex flex-row justify-between w-auto h-auto space-x-8">
          <div
            id="example1"
            className="flex flex-col justify-end w-[250px] h-[177px] border-2 border-dashed rounded-[25px] border-[#3B3B3B]">
            <img src="./sketches/sketch-1.jpg" onClick={handleSelectSketch} className="rounded-[35px]" />
            
          </div>
          <div
            id="example2"
            className="flex items-end justify-end w-[250px] h-[177px] border-2 border-dashed rounded-[25px] border-[#3B3B3B] m-auto">
            <img src="./sketches/sketch-2.png" onClick={handleSelectSketch} className="object-scale-down"/>
          </div>
          <div
            id="example3"
            className="flex items-end justify-end w-[250px] h-[177px] border-2 border-dashed rounded-[25px] border-[#3B3B3B]">
            <img src="./sketches/sketch-3.jpg" onClick={handleSelectSketch} className="rounded-[35px] m-auto" />
          </div>
          <div
            id="example4"
            className="flex items-end justify-end w-[250px] h-[177px] border-2 border-dashed rounded-[25px] border-[#3B3B3B]">
            <img src="./sketches/sketch-1.jpg" onClick={handleSelectSketch} className="rounded-[35px]" />
          </div>
          <div
            id="example5"
            className="flex items-end justify-end w-[250px] h-[177px] border-2 border-dashed rounded-[25px] border-[#3B3B3B]">
            <img src="./sketches/sketch-1.jpg" onClick={handleSelectSketch} className="rounded-[35px]" />
          </div>
        </div>
    )
};

export default Samples;