import { useOptionStore } from "@/store";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Value } from "@radix-ui/react-select";

const Dropdown = () => {
  const setOption = useOptionStore((state: any) => state.setOption);
  const option = useOptionStore((state: any) => state.option);

  return (
    <div
      id="selectMenu"
      className="m-3 h-[50px] w-[300px] flex items-center justify-center rounded-[15px] duration-300 ease-in-out text-[#f4f2f0] bg-[#3B3B3B] drop-shadow-[0_12px_8px_rgba(0,0,0,0.25)]">
      <Select defaultValue={option} onValueChange={(value) => setOption(value)}>
        <SelectTrigger className="w-full text-center rounded-[15px]  text-[#f4f2f0] bg-[#3B3B3B]">
          <SelectValue placeholder="Select a Type" />
        </SelectTrigger>
        <SelectContent className="w-full text-center rounded-[15px] text-[#f4f2f0] bg-[#3B3B3B]">
          <SelectGroup>
            <SelectLabel>Type</SelectLabel>
            <SelectItem value="bedroom">Bedroom</SelectItem>
            <SelectItem value="livingroom">Livingroom</SelectItem>
            <SelectItem value="bathroom">Bathroom</SelectItem>
            <SelectItem value="masjid">Masjid</SelectItem>
            <SelectItem value="hallway">Hallway</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
