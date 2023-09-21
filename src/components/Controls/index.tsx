import React from "react";
import Imagedrop from "./Imagedrop";
import Dropdown from "./Dropdown";
import GenerateButton from "./GenerateButton";

const Controls = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] w-[354px] rounded-[25px] border border-[#3B3B3B]">
      <Imagedrop />
      <Dropdown />
      <GenerateButton />
    </div>
  );
};

export default Controls;
