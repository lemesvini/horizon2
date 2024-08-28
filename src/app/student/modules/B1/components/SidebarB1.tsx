"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonChalkboard,
  faListCheck,
  faScrewdriverWrench,
  faCircleUser,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const ResponsiveComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
};

const Sidebar = ({
  setSelectedPage,
}: {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedButton, setSelectedButton] = useState<string>("");

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = (page: string) => {
    setSelectedPage(page);
    setSelectedButton(page);
  };

  return (
    <div className="flex">
      <div className="fixed flex flex-col text-black h-14 laptop:h-[93%] m-2 w-[98%] laptop:m-3 laptop:left-0 bg-white rounded-lg laptop:bottom-4 laptop:w-60 top-14 drop-shadow-md">
        <div className="hidden mt-3 mb-3 laptop:items-center laptop:flex laptop:flex-row laptop:h-16 laptop:w-full">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-4xl p-3 text-[#0A3153]"
          />
          <div className="flex flex-col">
            <p>
              <strong>NOME</strong>
            </p>
            <p className="text-xs">email@user.com</p>
          </div>
        </div>
        <div className="hidden laptop:flex laptop:w-[90%] laptop:self-center laptop:rounded-xl laptop:bg-[#27823f] laptop:items-center laptop:h-12 laptop:text-center mb-3">
          <p className="w-full text-white text-xl font-bold bg-[#27823f]">
            Módulo B1
          </p>
        </div>
        <hr className="hidden laptop:flex laptop:w-[90%] self-center" />
        <div className="flex w-full h-14 justify-evenly h-fit text-[#0A3153] p-3 text-xl laptop:flex-col laptop:justify-start">
          <button
            className={`text-left mb-3 ${
              selectedButton === "Item1"
                ? "bg-[#BAC4C1] laptop:p-2 rounded-lg text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Item1")}
          >
            {windowWidth < 640 ? (
              <FontAwesomeIcon className="w-8" icon={faPersonChalkboard} />
            ) : (
              <>
                <FontAwesomeIcon
                  className="w-8 mr-2"
                  icon={faPersonChalkboard}
                />
                Lessons
              </>
            )}
          </button>
          <button
            className={`text-left mb-3 ${
              selectedButton === "Item2"
                ? "bg-[#BAC4C1] laptop:p-2 rounded-lg text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Item2")}
          >
            {windowWidth < 640 ? (
              <FontAwesomeIcon className="w-8" icon={faListCheck} />
            ) : (
              <>
                <FontAwesomeIcon className="w-8 mr-2" icon={faListCheck} />
                Written Practice
              </>
            )}
          </button>
          <button
            className={`text-left mb-3 ${
              selectedButton === "Item3"
                ? "bg-[#BAC4C1] laptop:p-2 rounded-lg text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Item3")}
          >
            {windowWidth < 640 ? (
              <FontAwesomeIcon className="w-8" icon={faSquarePlus} />
            ) : (
              <>
                <FontAwesomeIcon className="w-8 mr-2" icon={faSquarePlus} />
                Documents
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
