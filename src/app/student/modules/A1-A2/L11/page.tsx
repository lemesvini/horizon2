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

const LTitle = "LESSON ELEVEN";
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
          Qual o melhor conselho que alguém já te deu na vida?
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
          {["Vacation", "Luggage", "Trip", "Ticket", "Flight"].map(
            (word, index) => (
              <div
                key={index}
                className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
              >
                <p className="font-bold">{word}</p>
                <p className="font-extralight">
                  {
                    [
                      "Férias",
                      "Bagagem",
                      "Viagem",
                      "Passagem, ingresso",
                      "Voo",
                    ][index]
                  }
                </p>
              </div>
            )
          )}
        </div>

        {/* Second Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["Car", "Motorcycle", "Cab / Taxi", "Airplane", "Traffic"].map(
            (word, index) => (
              <div
                key={index}
                className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
              >
                <p className="font-bold">{word}</p>
                <p className="font-extralight">
                  {["Carro", "Motocicleta", "Taxi", "Avião", "Trânsito"][index]}
                </p>
              </div>
            )
          )}
        </div>

        {/* Third Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["Can", "Could", "Should", "Ought to"].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Poder", "Poderia", "Deveria", "Dever"][index]}
              </p>
            </div>
          ))}
        </div>

        {/* Fourth Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {[
            "to Travel / Traveled / Traveled",
            "to Arrive / Arrived / Arrived",
            "to Drive / Drove / Driven",
            "to Spend / Spent / Spent",
          ].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Viajar", "Chegar", "Dirigir", "Gastar, Passar"][index]}
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
            <p>Modals</p>
          </div>
          <div className="flex flex-col tablet:flex-row justify-around w-full p-3 items-center">
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Can / Could
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>[ Poder / Poderia ]</p>
              </div>
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: <strong>Can you</strong> play the piano?
                </p>
                <p>
                  B: No, but I <strong>can</strong> play the guitar!
                </p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: <strong>Could you </strong>pass the salt?
                </p>
                <p>B: Yes! There you go.</p>
              </div>
            </div>
            <br className="block tablet:hidden" />
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Should 
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>[ Deve, Deveria ]</p>
              </div>
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: You <strong>should</strong> say you{"'"}re sorry!
                </p>
                <p>
                  B: I know I <strong>should</strong> but I{" "}
                  <strong>can{"'"}t</strong>...
                </p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: <strong>Should I</strong> stay or <strong>should I</strong>{" "}
                  go?
                </p>
                <p>
                  B: I think you <strong>shouldn{"'"}t</strong> go now.
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
          <p>
            Are you good at giving advice? What is the best advice you recieved
            in your life?
          </p>
          <p>Can you play instruments? Could you swim as a kid?</p>
          <p>What{"'"}s your favorite activity outside of work / study?</p>
          <p>Who is the best singer of all times for you? And the worst?</p>
        </div>
      </div>
      <div className="hidden laptop:flex w-[36%] ">
        <Image src={PracticeImg} alt="" className="h-full rounded-r-lg"></Image>
      </div>
    </div>
  </div>
);
function LessonEleven() {
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

export default LessonEleven;
