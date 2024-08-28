"use client";
import React, { useState } from "react";
import Image from "next/image";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import PracticeImg from "../../../../../../public/src/practice1img.png";
import LHeader from "../../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleCheck,
  faCircleExclamation,
  faCirclePlus,
  faCircleUser,
  faComment,
  faFeatherPointed,
  faFire,
  faHeart,
  faPen,
  faRetweet,
  faSpellCheck,
} from "@fortawesome/free-solid-svg-icons";
const LTitle = "LESSON FOUR";
const TitleColor = "#335C67";
const WarmUp = (
  <div className="w-full h-full p-2">
    <div className="flex w-full h-[100%] rounded-lg items-center gap-2 justify-center flex-col ">
      <div className="flex flex-col p-4 border drop-shadow bg-white rounded w-full tablet:w-[60%]">
        <div className="flex flex-row gap-3 items-center">
          <span className="flex w-34 h-34 rounded-full text-4xl">
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
          <div className="flex flex-col">
            <span className="font-bold">
              Lex{" "}
              <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600" />
            </span>
            <span className="text-sm">@LexFromHorizon</span>
          </div>
        </div>
        <br />
        <span className="self-start">
          Qual é a comida e bebida favorita de vocês?
        </span>
        <span className="py-3 text-sm text-slate-400">
          9:41 AM - From EARTH
        </span>
        <hr />
        <div className="flex flex-row w-full justify-around pt-3">
          <span>
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
          <span>
            <FontAwesomeIcon icon={faRetweet} /> 4
          </span>
          <span>
            <FontAwesomeIcon icon={faHeart} /> 97
          </span>
        </div>
      </div>
    </div>
  </div>
);
const Vocab = (
  <div className="w-full h-full p-2">
    <div className="w-full h-[100%] drop-shadow">
      <div className="w-full h-full flex flex-wrap">
        {/* First Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["Rice", "Beans", "Pasta", "Meat", "Chicken"].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Arroz", "Feijão", "Macarrão", "Carne", "Frango"][index]}
              </p>
            </div>
          ))}
        </div>

        {/* Second Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["Juice", "Soda", "Beer", "Ice", "Ice Cream"].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Suco", "Refrigerante", "Cerveja", "Gelo", "Sorvete"][index]}
              </p>
            </div>
          ))}
        </div>

        {/* Third Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["He", "She", "It", "His / Her"].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Ele", "Ela", "(neutro) Ele, Ela", "Dele / Dela"][index]}
              </p>
            </div>
          ))}
        </div>

        {/* Fourth Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {[
            "to Eat / Ate / Eaten",
            "to Drink / Drank / Drunk",
            "to Want / Wanted / Wanted",
            "to Like / Liked / Liked",
          ].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Comer", "Beber", "Querer", "Gostar"][index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
const Input = (
  <>
    <div className="w-full h-full">
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full laptop:h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>Third Person Rule</p>
          </div>
          <div className="w-full flex justify-center">
            {/* <hr className="w-[98%]" /> */}
          </div>
          <div className="flex w-full h-fit p-3 flex-col laptop:flex-row gap-3 justify-evenly">
            <div className="flex w-full h-full laptop:1/3 flex-col">
              <span className="p-3 bg-[#9E2A2B] w-full text-white flex rounded-xl items-center justify-center text-xl font-bold">
                Add "S"
              </span>
              <div className="flex flex-col gap-5 p-4 text-xl">
                <p>
                  He work<strong className="text-[#9e2a2b]">s</strong> as a
                  teacher.
                </p>
                <p>
                  She like<strong className="text-[#9e2a2b]">s</strong> to eat
                  sushi.
                </p>
                <p>
                  He love<strong className="text-[#9e2a2b]">s</strong> to drink
                  beer.
                </p>
                <p>
                  She play<strong className="text-[#9e2a2b]">s</strong> cards.
                </p>
                <p>
                  She work<strong className="text-[#9e2a2b]">s</strong> at
                  Google.
                </p>
              </div>
            </div>
            <div className="flex w-full h-full laptop:1/3 flex-col">
              <span className="p-3 bg-[#9E2A2B] w-full text-white flex rounded-xl items-center justify-center text-xl font-bold">
                Add "Es"
              </span>
              <div className="flex flex-col gap-5 p-4 text-xl">
                <p>
                  Do<strong className="text-[#9e2a2b]">es</strong> he work as a
                  teacher?
                </p>
                <p>
                  She watch<strong className="text-[#9e2a2b]">es</strong> X-men
                  97.
                </p>
                <p>
                  He wash<strong className="text-[#9e2a2b]">es</strong> the
                  dishes.
                </p>
                <p>
                  He kiss<strong className="text-[#9e2a2b]">es</strong> his cat.
                </p>
                <p>
                  She do<strong className="text-[#9e2a2b]">es</strong>n't like
                  ice cream.
                </p>
              </div>
            </div>
            <div className="flex w-full h-full laptop:1/3 flex-col">
              <span className="p-3 bg-[#9E2A2B] w-full text-white flex rounded-xl items-center justify-center text-xl font-bold">
                Add "Ies"
              </span>
              <div className="flex flex-col gap-5 p-4 text-xl">
                <p className="text-sm text-center border rounded text-slate-400 px-1">
                  Verbs ending in Consonant + "Y"
                </p>
                <p>
                  He stud<strong className="text-[#9e2a2b]">ies</strong>{" "}
                  economics.
                </p>
                <p>
                  She part<strong className="text-[#9e2a2b]">ies</strong> on
                  weekends.
                </p>
                <p>
                  He cop<strong className="text-[#9e2a2b]">ies</strong> our
                  homework.
                </p>
                <p>
                  She bull<strong className="text-[#9e2a2b]">ies</strong> her
                  brother.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
const Practice = (
  <div className="w-full h-full p-2">
    <div className="bg-white flex w-full justify-between flex-row h-[100%] rounded-lg drop-shadow">
      <div className="flex flex flex-col w-full p-4 laptop:w-[64%] justify-evenly">
        <h3 className="w-full flex bg-[#9E2A2B] p-4 rounded-lg text-2xl font-bold text-white justify-center">
          Conversation Starter
        </h3>
        <h4 className="w-full p-4">Answer the questions below:</h4>
        <div className="w-full flex flex-col p-3 gap-4 h-fit bg-[#F3F5F7] rounded-xl justify-center pl-4">
          <p>What is your favorite food?</p>
          <p>What is your best friend's favorite food?</p>
          <p>Does your best friend eat sushi?</p>
          <p>Does your best friend drink beer?</p>
          <p>Does your best friend like barbecue?</p>
        </div>
      </div>
      <div className="hidden laptop:flex w-[36%] ">
        <Image src={PracticeImg} alt="" className="h-full rounded-r-lg"></Image>
      </div>
    </div>
  </div>
);
function LessonFour() {
  const [selectedPage, setSelectedPage] = useState("Item1");

  const user = auth.currentUser;
  const router = useRouter();

  const buttonClasses = (item: any) =>
    `h-fit laptop:h-18 px-2 py-2 ${
      selectedPage === item
        ? "bg-[#EAEAEA] text-[#002149] font-bold text-left"
        : "text-left text-[#DEE2E6] font-bold"
    } rounded-lg`;
  if (user) {
    return (
      <>
        <LHeader />
        <div className="fixed flex pt-14 flex w-full">
          <div className="fixed flex flex-col laptop:h-[calc(100dvh-75px)] text-black w-full laptop:mt-3 laptop:ml-3 laptop:left-0 bg-white rounded-lg laptop:bottom-4 laptop:w-60 top-14 drop-shadow-md">
            <div
              className="hidden laptop:flex rounded-t-lg laptop:w-full laptop:h-36 justify-center items-center"
              style={{ backgroundColor: TitleColor }}
            >
              <h2 className="text-white font-bold text-xl">{LTitle}</h2>
            </div>
            <div className="flex w-full h-fit justify-center p-3 text-xl laptop:flex-col laptop:h-full laptop:justify-evenly gap-6">
              <button
                className={buttonClasses("Item1")}
                onClick={() => setSelectedPage("Item1")}
              >
                <FontAwesomeIcon icon={faFire} className="px-2" />
                <span className="hidden laptop:inline"> Warm Up</span>
              </button>
              <button
                className={buttonClasses("Item2")}
                onClick={() => setSelectedPage("Item2")}
              >
                <FontAwesomeIcon icon={faSpellCheck} className="px-2" />
                <span className="hidden laptop:inline"> Vocabulary</span>
              </button>
              <button
                className={buttonClasses("Item3")}
                onClick={() => setSelectedPage("Item3")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline"> Input</span>
              </button>
              <button
                className={buttonClasses("Item4")}
                onClick={() => setSelectedPage("Item4")}
              >
                <FontAwesomeIcon icon={faPen} className="px-2" />
                <span className="hidden laptop:inline"> Practice</span>
              </button>
            </div>
          </div>
        </div>
        <div className="z-1 h-screen pt-32 laptop:pt-14 laptop:pl-64">
          {selectedPage === "Item1" && WarmUp}
          {selectedPage === "Item2" && Vocab}
          {selectedPage === "Item3" && Input}
          {selectedPage === "Item4" && Practice}
        </div>
      </>
    );
  } else {
    router.push("/login");
  }
}

export default LessonFour;
