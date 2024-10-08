"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cover from "./svgs/cover.svg";
import WarmUp from "./svgs/warmup.svg";
import Vocab1 from "./svgs/vocab1.svg"
import Vocab2 from "./svgs/vocab2.svg"
import Input1 from "./svgs/input1.svg"
import Input2 from "./svgs/input2.svg"
import Input3 from "./svgs/input3.svg"
import Input4 from "./svgs/input4.svg"
import Input5 from "./svgs/input5.svg"
import practice from "./svgs/practice.svg"
import ConverOut from "./svgs/coverout.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faHouse,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import { auth } from "@/firebase";

export default function B1L4() {
  const user = auth.currentUser;
  const router = useRouter();

  const images = [Cover, WarmUp, Vocab1, Vocab2, Input1, Input2, Input3, Input4, Input5, practice, ConverOut]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const [isGalleryOpen, setIsGalleryOpen] = useState(false); // Track if gallery view is open

  // Function to go to the next image
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous image
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to open the gallery view
  const handleGalleryOpen = () => {
    setIsGalleryOpen(true);
  };

  // Function to close the gallery view and select an image
  const handleGallerySelect = (index: number) => {
    setCurrentIndex(index);
    setIsGalleryOpen(false);
  };

  if (user) {
    return (
      <>
        <div className="flex bottom-0 justify-center">
          <div className="absolute flex bg-[#003256] text-white bottom-0 px-4 py-3 drop-shadow-sm gap-3 text-xl rounded">
            <button onClick={() => window.history.back()}>
              <FontAwesomeIcon icon={faHouse} />
            </button>
            <div className="border"></div>

            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faCircleArrowLeft} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              className="disabled:opacity-50 font-black"
            >
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
            <button onClick={handleGalleryOpen}>
              <FontAwesomeIcon icon={faLayerGroup} />
            </button>
          </div>
        </div>

        <div className="h-[100dvh] w-full bg-[#003256] flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt="SVG Presentation"
            className="rounded-xl"
          />
        </div>

        {isGalleryOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleGallerySelect(index)}
                    className="border m-2"
                  >
                    <Image
                      src={image}
                      alt={`SVG ${index + 1}`}
                      className="cursor-pointer"
                      width={150}
                      height={150}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else {
    router.push("/login");
  }
}
