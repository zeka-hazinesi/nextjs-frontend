"use client";
import ImageEditor from "@/components/draganddrop";
import OutputArea from "@/components/output";
import DropdownButton from "@/components/styledrop";
import GenerateButton from "@/components/generateButton";
import Samples from "@/components/samples"
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("modern");
  const [selectedSketch, setSelectedSketch] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    checkUser()
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Fehler beim überprüfen des Benutzers", error);
        setIsLoading(false);
      });
  }, []);

  const handleLoading = (state) => {
    setImgLoading(state);
  };

  const checkUser = async () => {
    const l_user = await supabase.auth.getUser(); // eingeloggten User erfassen, oder Null
    setUser(l_user);
  };

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  const handleUploadComplete = (imageUrl) => {
    setUploadedImageUrl(imageUrl);
  };

  const handleFileChange = (file) => {
    setFile(file);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoading ? (
          <p>Lade...</p>
        ) : (
          <div
          id="image-editor"
          className="flex flex-row justify-center items-center"
        >
          <div>
            <ImageEditor setFile={handleFileChange} user={user} isLoading={isLoading}/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <DropdownButton
              handleOption={handleOptionChange}
              selectedOption={selectedOption}
            />
            <GenerateButton
              handleUpload={handleUploadComplete}
              handleLoading={handleLoading}
              option={selectedOption}
              file={file}
            />
          </div>
          <div>
            <OutputArea imageUrl={uploadedImageUrl} isLoading={imgLoading} />
          </div>
        </div>
        )}
        <Samples selectSketch={setSelectedSketch} />
      </main>
    </>
  );
}
