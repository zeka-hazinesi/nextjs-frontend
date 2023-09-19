"use client";
import ImageEditor from "@/components/draganddrop";
import OutputArea from "@/components/output";
import DropdownButton from "@/components/styledrop";
import GenerateButton from "@/components/generateButton";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    checkUser()
    .then(() => setIsLoading(false))
    .catch((error) => {
      console.error("Fehler beim überprüfen des Benutzers", error);
      setIsLoading(false);
    });
  }, []);

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
              option={selectedOption}
              file={file}
            />
          </div>
          <div>
            <OutputArea imageUrl={uploadedImageUrl} />
          </div>
        </div>
        )}
        <div id="pricing" className="homepage-block">
          <div className="space-y-12 w-full sm:w-auto">
            <h1 className="font-alt text-4xl sm:text-6xl">Pricing</h1>
            <div className="flex text-left justify-evenly pricing">
              <div className="flex flex-col items-center w-56">
                <p className="text-center mb-12 bg-gray-200 px-4 py-1 rounded-full">
                  Free
                </p>
                <p className="price font-varent">0</p>
                <ul className="sm:list-disc">
                  <li>Unlimited images</li>
                  <li>Resolution limited to 720p</li>
                </ul>
              </div>
              <div className="flex flex-col items-center w-56">
                <p className="text-center mb-12 bg-primary px-4 py-1 rounded-full">
                  Pro
                </p>
                <p className="price font-varent">
                  3 <span>starting from</span>
                </p>
                <ul className="sm:list-disc">
                  <li>Unlimited images</li>
                  <li>Unlimited resolution</li>
                  <li>High quality refiner</li>
                </ul>
                <div className="flex justify-center mt-6">
                  <div
                    id="cleanup-subscribe-button"
                    className="bg-black text-white px-5 py-2 rounded-full hover:underline cursor-pointer mt-[75px]"
                  >
                    Try Free
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-64 bg-gray-200 px-1 py-3 mx-3 -mt-2 rounded-xl">
                <p className="text-center mb-12 bg-primary px-4 py-1 rounded-full">
                  ClipDrop Pro
                </p>
                <p className="price font-varent">
                  7 <span>starting from</span>
                </p>
                <ul className="sm:list-disc">
                  <li>Cleanup pro</li>
                  <li>Image upscaler pro</li>
                  <li>Background removal pro</li>
                  <li>Web editor pro</li>
                  <li>ClipDrop iOS pro</li>
                  <li>ClipDrop Android pro</li>
                </ul>
                <div className="flex justify-center mt-6">
                  <a
                    href="https://clipdrop.co/pricing?openSubscriptionModal=true&amp;defaultPlan=year&amp;cancelUrl=https://cleanup.pictures/&amp;successUrl=https://cleanup.pictures/"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-black text-white px-5 py-2 rounded-full hover:underline">
                      Try Free
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center w-56">
                <p className="text-center mb-12 bg-gray-200 px-4 py-1 rounded-full">
                  API
                </p>
                <p className="api-price">Usage-based pricing</p>
                <ul>
                  <li>
                    <a href="https://clipdrop.co/apis/docs/inpainting?utm_campaign=cleanup_pictures">
                      <u>API documentation</u>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="faq" className="homepage-block bg-gray-100">
          <div className="homepage-content">
            <h1 className="font-alt text-4xl sm:text-6xl">FAQ</h1>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">What is Inpainting?</h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  Inpainting is a retouch technology used to remove any unwanted
                  objects from photos (object removal). It can be used to remove
                  an unwanted person. It used to work with a Clone tool like the
                  inpaint, but using artificial intelligence gives much better
                  results today.
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">
                Why Cleanup.Pictures is better than other inpating app?
              </h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  Cleanup.picture is an advanced editing tool based on
                  Artificial Intelligence that is much better than other clone
                  stamp tool. Clone tool like adobe photoshop fix, need a
                  background reference, while our AI is truly able to guess what
                  was behind the unwanted text, the unwanted people, unnecessary
                  objects in just a few clicks.
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">
                What image resolutions can cleanup.pictures handle?
              </h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  You can import and edit picture of any size in
                  Cleanup.pictures. Export will be limited to 720px for the free
                  version. There is{" "}
                  <span className="bg-primary px-2 py-1 rounded-full whitespace-nowrap">
                    no size limit
                  </span>{" "}
                  for the Pro version. We're continuously improving the quality
                  of the image exported by Cleanup.pictures.
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">How much Cleanup.pictures cost?</h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  Cleanup.Picture is{" "}
                  <span className="bg-primary px-2 py-1 rounded-full whitespace-nowrap">
                    free
                  </span>{" "}
                  unless you need better quality and process hi-resolution
                  images. The price is then{" "}
                  <span className="bg-primary px-2 py-1 rounded-full whitespace-nowrap">
                    $5 per month
                  </span>{" "}
                  or{" "}
                  <span className="bg-primary px-2 py-1 rounded-full whitespace-nowrap">
                    $36 per year ($3 per month)
                  </span>{" "}
                  for processing images of any size. The trial allows testing
                  the HD quality for free.
                  <br />
                  Your subscription will work on both mobile and desktop.
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">What is your refund policy?</h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  We provide a free trial period of our offering to let you
                  fully evaluate it before you make the decision to purchase the
                  full version. Please use the trial period to ensure our
                  product meets your needs before purchasing a license.
                  <br />
                  Our support team is standing by to answer all your questions
                  if need be. Please test the product’s features and
                  functionalities, and coordinate with our support team to
                  clarify your doubts before making a final purchase.
                  <br />
                  The trial period that we offer should be considered a “free
                  look period”. During this time, we encourage you to use our
                  solution, test it, and decide if you would like to purchase
                  the full version.
                  <br />
                  Once you purchase the pro version of Cleanup.pictures, your
                  license to use it will be activated after your payment has
                  cleared. Once the license is activated, refunds will be given
                  in the rarest cases such as technical difficulties, platform
                  incompatibilities or other unforeseen circumstances.
                  <br />
                  In this case, refund will be total if the subscription is less
                  than 14 days old and partial if the subscription is older.
                  (Prorated to the amount of days since the subscription
                  started).
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">
                How to use Cleanup pictures on iOS or Android?
              </h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  You can download the{" "}
                  <a href="https://clipdrop.co?utm_campaign=cleanup_pictures">
                    <span className="bg-primary px-2 py-1 rounded-full whitespace-nowrap">
                      <u>ClipDrop iOS App</u>
                    </span>
                  </a>{" "}
                  to use cleanup from your mobile.
                  <br />
                  <br />
                  On Android, you can also directly visit and use{" "}
                  <u>https://cleanup.pictures</u>.<br />
                  Many iOS and Android users simply add this website to their
                  homescreen, to use it as an app on their mobile.
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">
                How to use Edit, Pause or Cancel my subscription?
              </h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  You can manage your subscription by visiting the "manage
                  subscription" section:{" "}
                </span>
                <img
                  className="w-60 inline-block p-2"
                  src="help/manage-subscription.jpg"
                  alt="manage subscription"
                />
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">
                How many users can use a Cleanup subscription?
              </h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  Each cleanup subscription is individual and limited to 1 user.
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">How can I use the inpainting API?</h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  <a
                    href="https://clipdrop.co/apis/docs/inpainting?utm_campaign=cleanup_pictures"
                    target="_blank"
                    rel="dofollow"
                  >
                    <u>Cleanup's inpainting API</u>
                  </a>{" "}
                  can be used in any environment such as Node.js, SwiftUI,
                  Kotlin..etc.
                  <br />
                  We provide extensive documentation, a live demo and numerous
                  samples to get started quickly.
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">How to remove people from a photo?</h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  <a href="https://cleanup.pictures">cleanup.pictures</a> lets
                  you remove people from a photo in a few seconds for free. You
                  don't need complex softwares such as Adobe Photoshop. With{" "}
                  <a href="https://cleanup.pictures">cleanup.pictures</a> you
                  can achieve professional results in a few clicks.
                </span>
              </p>
              <p>
                <b>Pro tip:</b> Select a bigger brush and don't hesitate to
                cover more than the area you want to retouch (especially to
                cover shadows). It will help the algorithm create the best
                results.
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">
                How to remove unwanted objects from a photo?
              </h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  Use <a href="https://cleanup.pictures">cleanup.pictures</a> to
                  remove unwanted objects, people, or defects. The A.I.
                  algorithm will reconstruct what was behind the object in just
                  one click. Be sure that the unwanted elements are covered to
                  remove objects. You can remove persons, or remove text the
                  same way.
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">
                How to remove text, a logo or watermarks from an image?
              </h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  You can remove unwanted text from a picture in a few seconds
                  with impressive accuracy using{" "}
                  <a href="https://cleanup.pictures">cleanup.pictures</a>. As
                  for objects or people, simply load your image in the tool and
                  draw over the text or watermark that you'd like to remove.
                  After a few seconds, you'll see it completely gone.
                </span>
              </p>
              <p>
                Pro tip: To get the best results, make sure that you overflow
                and draw a slightly bigger area than what you actually want to
                remove.
              </p>
              <p>
                Important: Watermarks usually indicate that an image has
                restrictive copyrights. Only remove watermarks on images for
                which you have an explicit license.
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">How to remove blemish or wrinkles?</h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  You can remove blemishes or wrinkles from your profile picture
                  using the CleanUp brush. Like for another photo retouch, just
                  be sure you overflow the brush over it, and download the
                  result.
                </span>
              </p>
            </div>
            <div
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 itemProp="name">How to remove the background of an image?</h2>
              <p
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">
                  The best way to remove the background of a photo online or
                  using your phone is using{" "}
                  <a
                    href="https://clipdrop.co?utm_campaign=cleanup_pictures"
                    target="_blank"
                    rel="noreferrer dofollow"
                  >
                    ClipDrop
                  </a>
                  . It provides the best quality available today.
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col space-y-8 items-center bg-black text-white text-center p-4 pt-12">
        <a
          href="https://clipdrop.co?utm_campaign=cleanup_pictures"
          target="_blank"
          rel="noreferrer dofollow"
        >
          <img src="logo-footer.svg" className="h-24" alt="Cleanup.pictures" />
        </a>
        <div className="pt-8">
          <p>
            <a href="https://cleanup.pictures">CleanUp.pictures</a>&nbsp;is a
            web application that lets you cleanup photos with a quick &amp;
            simple interface.
          </p>
          <p className="space-x-12">
            <span>©2022 Init ML</span>
            <a className="underline" href="https://clipdrop.co/terms">
              Terms &amp; Services
            </a>
            <a className="underline" href="https://clipdrop.co/privacy">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex justify-center items-center w-full space-x-8">
          <a
            href="https://www.producthunt.com/posts/cleanup-pictures?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-cleanup-pictures"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=316605&amp;theme=dark&amp;period=weekly"
              alt="CleanUp.Pictures - Remove objects and defects from your pictures - 100% free | Product Hunt"
              style={{ width: 250, height: 54 }}
            />
          </a>
          <a
            href="https://fixthephoto.com/free-apps-to-remove-unwanted-objects-from-photo.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src="fix.svg" width="80" height="80" alt="Fix" />
          </a>
        </div>
      </footer>
    </>
  );
}
