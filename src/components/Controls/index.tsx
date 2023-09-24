import React from "react";
import Imagedrop from "./Imagedrop";
import StylesDropdown from "./StylesDropdown";
import RoomsDropdown from "./RoomsDropdown";
import GenerateButton from "./GenerateButton";

const Controls = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] w-[354px] rounded-[25px] border bg-[#f4f2f0] border-[#9A8172]">
      <Imagedrop />
      <RoomsDropdown />
      <StylesDropdown />
      <GenerateButton />
    </div>
  );
};

export default Controls;
