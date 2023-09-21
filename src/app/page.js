"use client";
import ImageEditor from "@/components/image-editor";
import OutputArea from "@/components/output";
import DropdownButton from "@/components/styledrop";
import GenerateButton from "@/components/generateButton";
import Samples from "@/components/samples"
import { useLoading, useUser } from "@/store";

export default function Home() {
  const { user } = useUser();
  const { isLoading } = useLoading();

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
            <ImageEditor />
          </div>
          <div className="flex flex-col items-center justify-center">
            <DropdownButton />
            <GenerateButton
            />
          </div>
          <div>
            <OutputArea />
          </div>
        </div>
        )}
        <Samples />
      </main>
    </>
  );
}
