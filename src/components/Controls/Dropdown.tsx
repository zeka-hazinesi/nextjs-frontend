import { useOptionStore } from "@/store";
import React from "react";

const Dropdown = () => {
  const setOption = useOptionStore((state: any) => state.setOption);
  const option = useOptionStore((state: any) => state.option);

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.currentTarget.value);
  };

  return (
    <div
      id="selectMenu"
      className="m-4 h-[50px] w-[300px] flex items-center justify-center rounded-[15px]  text-black bg-[#3B3B3B]">
      <select className="" defaultValue={option} onChange={handleOption}>
        <option value="modern">Modern </option>
        <option value="minimalist">Minimalist </option>
        <option value="contemporary">Contemporary </option>
        <option value="scandinavian">Scandinavian </option>
        <option value="Interior AI">Interior AI </option>
        <option value="midcentury modern">Midcentury modern </option>
        <option value="zen">Zen </option>
        <option value="tropical">Tropical </option>
        <option value="industrial">Industrial </option>
        <option value="biophilic">Biophilic </option>
        <option value="vintage">Vintage </option>
        <option value="farmhouse">Farmhouse </option>
        <option value="art deco">Art deco </option>
        <option value="rustic">Rustic </option>
        <option value="bohemian">Bohemian </option>
        <option value="coastal">Coastal </option>
        <option value="japanese design">Japanese design </option>
        <option value="french country">French country </option>
        <option value="cottagecore">Cottagecore </option>
        <option value="maximalist">Maximalist </option>
        <option value="art nouveau">Art nouveau </option>
        <option value="gaming room">Gaming room </option>
        <option value="baroque">Baroque </option>
        <option value="cyberpunk">Cyberpunk </option>
        <option value="ski chalet">Ski chalet </option>
        <option value="vaporwave">Vaporwave </option>
        <option value="sketch">Sketch </option>
        <option value="tribal">Tribal </option>
        <option value="medieval">Medieval </option>
        <option value="christmas">Christmas </option>
        <option value="easter">Easter </option>
        <option value="Chinese New Year">Chinese New Year </option>
        <option value="halloween">Halloween </option>
        <option value="hot pink">Hot pink </option>
        <option value="neoclassic">Neoclassic (Pro) </option>
      </select>
    </div>
  );
};

export default Dropdown;
