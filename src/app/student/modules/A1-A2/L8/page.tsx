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
const LTitle = "LESSON EIGHT";
const TitleColor = "#99C286";
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
          Você é bom com números? Você gosta da área de exatas?
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
          {["Price", "Weight", "Height", "Quantity", "Length"].map(
            (word, index) => (
              <div
                key={index}
                className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
              >
                <p className="font-bold">{word}</p>
                <p className="font-extralight">
                  {
                    ["Preço", "Peso", "Altura", "Quantidade", "Comprimento"][
                      index
                    ]
                  }
                </p>
              </div>
            )
          )}
        </div>

        {/* Second Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["Weekday(s)", "Weekend(s)", "Day Off", "Degree", "Clock"].map(
            (word, index) => (
              <div
                key={index}
                className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
              >
                <p className="font-bold">{word}</p>
                <p className="font-extralight">
                  {
                    [
                      "Dias da Semana",
                      "Finais de semana",
                      "Dia de folga",
                      "Grau",
                      "Relógio",
                    ][index]
                  }
                </p>
              </div>
            )
          )}
        </div>

        {/* Third Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["Many", "Much", "How many...?", "How much...?"].map(
            (word, index) => (
              <div
                key={index}
                className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
              >
                <p className="font-bold">{word}</p>
                <p className="font-extralight">
                  {
                    [
                      "Muitos, Muitas",
                      "Muito, Muita",
                      "Quantos...?",
                      "Quanto...?",
                    ][index]
                  }
                </p>
              </div>
            )
          )}
        </div>

        {/* Fourth Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {[
            "to Count / Counted / Counted",
            "to Measure / Measured / Measured",
            "to Schedule / Scheduled / Scheduled",
            "to Celebrate / Celebrated / Celebrated",
          ].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Contar", "Medir", "Agendar", "Celebrar"][index]}
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
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>Wh-Questions</p>
          </div>
          <div className="flex flex-col tablet:flex-row justify-around w-full p-3 items-center">
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Many - How many?
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>Countable things</p>
              </div>
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: <strong>How many</strong> friends do you have?
                </p>
                <p>
                  B: Oh, I have <strong>many</strong>, but Scott is my best
                  friend!
                </p>
              </div>
              <br className="hidden tablet:block"/>
              <br className="hidden tablet:block"/>
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: <strong>How many</strong> friends do you have?
                </p>
                <p>
                  B: Oh, I have <strong>many</strong>, but Scott is my best
                  friend!
                </p>
              </div>
            </div>
            <br className="block tablet:hidden"/>
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Much - How much?
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>Uncountable things</p>
              </div>
              <br className="hidden tablet:block"/>
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: <strong>How much</strong> water do you drink a day?
                </p>
                <p>
                  B: Oh, not <strong>much</strong>... I have to drink more!
                </p>
              </div>
              <br className="hidden tablet:block"/>
              <br className="hidden tablet:block"/>
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: <strong>How much</strong> patience do you have with kids?
                </p>
                <p>
                  B: Oh, I have <strong>much</strong>, I love kids a lot!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full laptop:h-full p-2 snap-start">
        <div className="bg-white w-full h-full rounded-lg drop-shadow">
          <div className="flex flex-row tablet:flex-col p-2 justify-around">
            <div className="border flex flex-col w-full p-2 rounded"> 
              <p className="bg-slate-200 rounded-lg p-2">Numbers</p>
              <hr className="my-2" />
              <div className="flex flex-col tablet:flex-row justify-around">
                <div className="flex flex-col gap-2">
                  <p>1 - One</p>
                  <p>2 - Two</p>
                  <p>3 - Three</p>
                  <p>4 - Four</p>
                  <p>5 - Five</p>
                  <p>6 - Six</p>
                  <p>7 - Seven</p>
                  <p>8 - Eight</p>
                  <p>9 - Nine</p>
                  <p>10 - Ten</p>
                  <p>11 - Eleven</p>
                  <p>12 - Twelve</p>
                  <p>13 - Thirteen</p>
                  <p>14 - Fourteen</p>
                  <p>15 - Fifteen</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>16 - Sixteen</p>
                  <p>17 - Seventeen</p>
                  <p>18 - Eighteen</p>
                  <p>19 - Nineteen</p>
                  <p>20 - Twenty</p>
                  <p>21 - Twenty-One</p>
                  <p>22 - Twenty-Two</p>
                  <p>23 - Twenty-Three</p>
                  <p>24 - Twenty-Four</p>
                  <p>25 - Twenty-Five</p>
                  <p>26 - Twenty-Six</p>
                  <p>27 - Twenty-Seven</p>
                  <p>28 - Twenty-Eight</p>
                  <p>29 - Twenty-Nine</p>
                  <p>30 - Thirty</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>40 - Fourty</p>
                  <p>50 - Fifty</p>
                  <p>60 - Sixty</p>
                  <p>70 - Seventy</p>
                  <p>80 - Eighty</p>
                  <p>90 - Ninety</p>
                  <p>100 - A / One Hundred</p>
                  <p>101 - A Hundred and One</p>
                  <p>110 - A Hundred and Ten</p>
                  <p>120 - A Hundred and Twenty</p>
                  <p>150 - A Hundred and Fifty</p>
                  <p>300 - Three Hundred</p>
                  <p>1000 - A / One Thousand</p>
                  <p>1001 - A Thousand and One</p>
                  <p>2000 - Two Thousand</p>
                </div>
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
      <div className="flex flex-col w-full p-4 laptop:w-[64%] justify-evenly">
        <h3 className="w-full flex bg-[#9E2A2B] p-4 rounded-lg text-2xl font-bold text-white justify-center">
          Conversation Starter
        </h3>
        <h4 className="w-full p-4">Give directions:</h4>
        <div className="w-full flex flex-col p-3 gap-4 h-fit bg-[#F3F5F7] rounded-xl text-justify justify-center pl-4">
          <p>
            Open your city's map, choose two common spots (A and B) and guide
            your teacher on how to get from point A to point B without showing
            anything to them, just talking.
          </p>
          <p>
            Your teacher will have Maps opened and will try to follow your
            directions! Let's see if your teacher can get to point B without
            getting lost!
          </p>
        </div>
      </div>
      <div className="hidden laptop:flex w-[36%] ">
        <Image src={PracticeImg} alt="" className="h-full rounded-r-lg"></Image>
      </div>
    </div>
  </div>
);

function LessonEight() {
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
        <div className="fixed pt-14 flex w-full">
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

export default LessonEight;
