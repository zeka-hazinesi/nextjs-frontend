import React from "react";
import Imagedrop from "./Imagedrop";
import StylesDropdown from "./StylesDropdown";
import RoomsDropdown from "./RoomsDropdown";
import GenerateButton from "./GenerateButton";

const Controls = () => {
  return (
    <div className="justify-center items-center">
      <div className="flex flex-col items-center justify-center max-w-full h-[700px] w-[500px] rounded-[25px] border bg-[#f4f2f0] border-[#9A8172]">
        <Imagedrop />
        <RoomsDropdown />
        <StylesDropdown />
        <GenerateButton />
      </div>
    </div>
  );
};

export default Controls;
