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
      className="m-3 max-h-[50px] w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] flex-auto max-w-full flex items-center justify-center rounded-[15px] duration-300 ease-in-out text-[#f4f2f0] bg-[#3B3B3B] drop-shadow-[0_12px_8px_rgba(0,0,0,0.25)]">
      <Select defaultValue={option} onValueChange={(value) => setOption(value)}>
        <SelectTrigger className="w-full text-center rounded-[15px]  text-[#f4f2f0] bg-[#3B3B3B]">
          <SelectValue placeholder="Select a Style" />
        </SelectTrigger>
        <SelectContent className="w-full text-center rounded-[15px] text-[#f4f2f0] bg-[#3B3B3B]">
          <SelectGroup>
            <SelectLabel>Style</SelectLabel>
            <SelectItem value="scandinavian">Scandinavian</SelectItem>
            <SelectItem value="vintage">Vintage</SelectItem>
            <SelectItem value="biophilic">Biophilic</SelectItem>
            <SelectItem value="easter">Easter</SelectItem>
            <SelectItem value="hot pink">Hot Pink</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
