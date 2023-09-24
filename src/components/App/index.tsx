import React from "react";
import Controls from "@/components/Controls";
import Output from "@/components/Output";

const App = () => {
  return (
    <div
      id="app"
      className="border-4 border-black flex flex-col w-full h-auto items-center justify-center">
      <div className="border-4 border-red-500 basis-full w-[1920px] max-w-full max-h-full flex 2xl:flex-row flex-col items-center justify-center 2xl:space-x-16 space-x-0 2xl:space-y-0 space-y-16 mt-16 mb-16 pl-8 pr-8">
        <Controls />
        <Output />
      </div>
    </div>
  );
};

export default App;
