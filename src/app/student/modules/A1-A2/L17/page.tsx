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

const LTitle = "LESSON SEVENTEEN";
const TitleColor = "#E26D5C";

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
          O futuro anima você ou assusta você? Você tem planos a longo prazo?
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
          {["Future", "Early", "Late", "Date", "Schedule"].map(
            (word, index) => (
              <div
                key={index}
                className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
              >
                <p className="font-bold">{word}</p>
                <p className="font-extralight">
                  {
                    ["Futuro", "Cedo", "Tarde", "Data, Encontro", "Agenda"][
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
          {[
            "Assignment",
            "(Weather) Forecast",
            "On/In Time",
            "Concert",
            "Release",
          ].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {
                  [
                    "Trabalho, Tarefa",
                    "Previsão (do tempo)",
                    "Na hora / A tempo",
                    "Show (musical), concerto",
                    "Lançamento",
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>

        {/* Third Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["While", "For a while", "Plan", "Wish"].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Enquanto", "Por um tempo", "Plano", "Desejo"][index]}
              </p>
            </div>
          ))}
        </div>

        {/* Fourth Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {[
            "to Wait / Waited / Waited",
            "to Plan / Planned / Planned",
            "to Expect / Expected / Expected",
            "to Look Forward to",
          ].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {
                  [
                    "Esperar",
                    "Planejar",
                    "Esperar (que algo ocorra)",
                    "Aguardar ansiosamente",
                  ][index]
                }
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
        <div className="bg-white w-full h-[100dvh] tablet:h-full  rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>FUTURE</p>
          </div>
          <div className="flex flex-col tablet:flex-row justify-around w-full p-3 items-center">
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                "Will" is a modal verb!
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>Unplanned or spontaneous actions:</p>
              </div>
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  I <strong>will</strong> take a shower before work.
                </p>
                <p>
                  She <strong>will</strong> be here on time.
                </p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  I <strong>will not</strong> go to work today.
                </p>
                <p>
                  He <strong>won't</strong> come to the party.
                </p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  <strong>Will</strong> you talk to him?
                </p>
                <p>
                  I <strong>will</strong>, don't worry.
                </p>
              </div>
            </div>
            <br className="block tablet:hidden" />
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Going to / Gonna
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>Planned actions:</p>
              </div>
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  I am <strong>going to</strong> buy a new house.
                </p>
                <p>
                  You're <strong>going to</strong> buy a new car.
                </p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  He isn't <strong>going to</strong> travel to Europe.
                </p>
                <p>
                  She's <strong>gonna</strong> go to college.
                </p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  Are you <strong>going to</strong> move to another city?
                </p>
                <p>
                  Are you <strong>gonna</strong> call her?
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
      <div className="flex flex-col w-full p-4 laptop:w-[64%] justify-evenly">
        <h3 className="w-full flex bg-[#9E2A2B] p-4 rounded-lg text-2xl font-bold text-white justify-center">
          Conversation Starter
        </h3>
        <h4 className="w-full p-4">Answer the questions below:</h4>
        <div className="w-full flex flex-col p-3 gap-4 h-fit bg-[#F3F5F7] rounded-xl text-justify justify-center pl-4">
          <p>What are your plans for this year?</p>

          <p>What are you gonna do for New Year's Eve?</p>

          <p>Do you have plans to live in another country?</p>
        </div>
      </div>
      <div className="hidden laptop:flex w-[36%] ">
        <Image src={PracticeImg} alt="" className="h-full rounded-r-lg"></Image>
      </div>
    </div>
  </div>
);
function LessonSeventeen() {
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

export default LessonSeventeen;
