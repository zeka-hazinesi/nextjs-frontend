import React from "react";
import Controls from "@/components/Controls";
import Output from "@/components/Output";

const App = () => {
  return (
    <div
      id="app"
      className="flex flex-col w-full h-auto items-center justify-center"
    >
      <div className="flex flex-row w-auto h-auto items-center justify-center space-x-36  m-36">
        <Controls />
        <Output />
      </div>
    </div>
  );
};

export default App;
