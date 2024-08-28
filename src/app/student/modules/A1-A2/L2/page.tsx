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
const LTitle = "LESSON TWO";
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
          Guys, o que devo dizer quando vou me apresentar em inglês?
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
          {[
            "House",
            "Apartment",
            "Birthday",
            "Roommate",
            "(Apartment/Housing) Complex",
          ].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {
                  [
                    "Casa",
                    "Apartamento",
                    "Aniversário",
                    "Colega de quarto",
                    "Condomínio",
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>

        {/* Second Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["Account", "Username", "Password", "Pet", "@ (at)"].map(
            (word, index) => (
              <div
                key={index}
                className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
              >
                <p className="font-bold">{word}</p>
                <p className="font-extralight">
                  {
                    [
                      "Conta",
                      "Nome de usuário",
                      "Senha",
                      "Animal de estimação",
                      "Arroba",
                    ][index]
                  }
                </p>
              </div>
            )
          )}
        </div>

        {/* Third Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["My", "Your", "Our", "Their"].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Meu", "Seu, sua", "Nosso, nossa", "Deles, delas"][index]}
              </p>
            </div>
          ))}
        </div>

        {/* Fourth Block */}
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          {["to Have", "to Live", "to use", "to Go"].map((word, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted"
            >
              <p className="font-bold">{word}</p>
              <p className="font-extralight">
                {["Ter, possuir", "Morar, viver", "Usar", "Ir"][index]}
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
            <p>Auxiliaries</p>
          </div>
          <div className="w-full flex justify-center">
            {/* <hr className="w-[98%]" /> */}
          </div>
          <div className="flex w-full h-fit p-3 flex-col laptop:flex-row gap-3 justify-evenly">
            <div className="flex w-full h-full laptop:1/3 flex-col">
              <span className="p-3 bg-[#9E2A2B] w-full text-white flex rounded-xl items-center justify-center text-xl font-bold">
                Affirmative
              </span>
              <div className="flex flex-col gap-5 p-4 text-xl">
                <p>
                  I <strong className="text-[#9e2a2b]">work</strong> as a
                  teacher.
                </p>
                <p>
                  I <strong className="text-[#9e2a2b]">work</strong> in an
                  office.
                </p>
                <p>
                  You<strong className="text-[#9e2a2b]"> work</strong> from
                  home.
                </p>
                <p>
                  We<strong className="text-[#9e2a2b]"> like</strong> English.
                </p>
                <p>
                  They<strong className="text-[#9e2a2b]"> work</strong> at
                  Google.
                </p>
              </div>
            </div>
            <div className="flex w-full h-full laptop:1/3 flex-col">
              <span className="p-3 bg-[#9E2A2B] w-full text-white flex rounded-xl items-center justify-center text-xl font-bold">
                Negative
              </span>
              <div className="flex flex-col gap-5 p-4 text-xl">
                <p>
                  I<strong className="text-[#9e2a2b]"> do not work</strong> as a
                  teacher.
                </p>
                <p>
                  You<strong className="text-[#9e2a2b]"> don't work</strong> in
                  an office.
                </p>
                <p>
                  You<strong className="text-[#9e2a2b]"> do not work</strong>{" "}
                  from home.
                </p>
                <p>
                  We<strong className="text-[#9e2a2b]"> don't like</strong>{" "}
                  sushi.
                </p>
                <p>
                  They<strong className="text-[#9e2a2b]"> don't work</strong> at
                  Google.
                </p>
              </div>
            </div>
            <div className="flex w-full h-full laptop:1/3 flex-col">
              <span className="p-3 bg-[#9E2A2B] w-full text-white flex rounded-xl items-center justify-center text-xl font-bold">
                Interrogative
              </span>
              <div className="flex flex-col gap-5 p-4 text-xl">
                <p>
                  <strong className="text-[#9e2a2b]">Do you</strong> work as a
                  teacher?
                </p>
                <p>
                  <strong className="text-[#9e2a2b]">Do you</strong> work in an
                  office?
                </p>
                <p>
                  <strong className="text-[#9e2a2b]">Do you</strong> work from
                  home?
                </p>
                <p>
                  <strong className="text-[#9e2a2b]">Do we</strong> like sushi?
                </p>
                <p>
                  <strong className="text-[#9e2a2b]">Do they</strong> work at
                  Google?
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
        <h4 className="w-full p-4 font-bold">
          Introduce yourself following the example!
        </h4>
        <div className="w-full flex flex-col p-3 gap-4 h-fit bg-[#F3F5F7] rounded-xl justify-center pl-4">
          <p className="font-bold text-xl p-2">John Smith</p>
          <p className="tracking-widest p-2">
            Hello! My name is John and I’m 21 years old. I live in Los Angeles,
            California and I love the beach. I work as a financial assistant and
            I study economics. I have two pets: one dog and one cat. I use
            Instagram and my username is @johnsmith.
          </p>
        </div>
      </div>
      <div className="hidden laptop:flex w-[36%] ">
        <Image src={PracticeImg} alt="" className="h-full rounded-r-lg"></Image>
      </div>
    </div>
  </div>
);

function LessonTwo() {
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

export default LessonTwo;
