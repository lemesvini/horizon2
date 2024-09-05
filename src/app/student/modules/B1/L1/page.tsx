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
import InputSimple from "../components/InputSimple";
import Input1col from "../components/input1col";

const LTitle = "LESSON ONE";
const TitleColor = "#84A59D";
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
          Hey, there! What's your favorite holiday? Where do you like to spend
          it?
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
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Gathering / Get-Together</p>
            <p className="font-extralight">Reunião, Encontro</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Celebration</p>
            <p className="font-extralight">Celebração</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Holiday</p>
            <p className="font-extralight">Feriado</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Event</p>
            <p className="font-extralight">Evento</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Date</p>
            <p className="font-extralight">Encontro/Data</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2">
            <p className="font-bold">Christmas</p>
            <p className="font-extralight">Natal</p>
          </div>
        </div>
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">New Year’s Eve</p>
            <p className="font-extralight">Véspera de Ano Novo</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Easter</p>
            <p className="font-extralight">Páscoa</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Carnival</p>
            <p className="font-extralight">Carnaval</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Hoedown</p>
            <p className="font-extralight">Festa Junina</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">As long As</p>
            <p className="font-extralight">Contanto que</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2">
            <p className="font-bold">Therefore</p>
            <p className="font-extralight">Logo</p>
          </div>
        </div>
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">to Travel / Traveled / Traveled</p>
            <p className="font-extralight">Viajar</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Trip</p>
            <p className="font-extralight">Viagem, Passeio</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Roadtrip</p>
            <p className="font-extralight">Viagem de carro</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">to Visit / Visited / Visited</p>
            <p className="font-extralight">Visitar</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">to Enjoy / Enjoyed / Enjoyed</p>
            <p className="font-extralight">Aproveitar, gostar</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2">
            <p className="font-bold">to Relax / Relaxed / Relaxed</p>
            <p className="font-extralight">Relaxar</p>
          </div>
        </div>
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Even Though / Although</p>
            <p className="font-extralight">Embora</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">While</p>
            <p className="font-extralight">Enquanto</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">to Prepare / Prepared / Prepared</p>
            <p className="font-extralight">Preparar</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">to Hang Out</p>
            <p className="font-extralight">Passar tempo Junto</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">to Pay (Somebody) A Visit</p>
            <p className="font-extralight">Visitar Alguém</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2">
            <p className="font-bold">to Unwind</p>
            <p className="font-extralight">Relaxar</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const examples1 = (
  <>
    <div className="flex flex-col gap-3 text-lg h-full justify-center">
      <p>• My mom always cooks on Christmas. The food on Christmas is always delicious.</p>
      <p>• We were tired. But we had a lot of fun at the gathering.</p>
      <p>• It{"’"}s possible. We hang out together. </p>
      <p>• New Year{"’"}s Eve was on a Friday. We decided to travel for the weekend.</p>
    </div>
  </>
);
const examples2 = (
  <>
    <div className="flex flex-col gap-3 text-lg h-full justify-center">
      <p>• My mom always cooks on Christmas, therefore the food is delicious.</p>
      <p>• Even though we were tired, we still had a lot of fun at the gathering.</p>
      <p>• We hang out together whenever it{"’"}s possible.</p>
      <p>• Since New Year’s Eve was on a Friday, we decided to travel for the weekend.</p>
    </div>
  </>
);
const examples4 = (
  <>
    <div className="flex flex-col gap-2 text-lg h-full justify-center">
      <p>• <strong>How long does it take to</strong> get there?</p>
      <p>• <strong>How long does it take to</strong> set off the fireworks?</p>
      <p>• <strong>How long does it take to</strong> prepare the Christmas dinner?</p>
      <p>• <strong>How long does it take <i className="font-normal">them</i> to</strong> get ready?</p>
      <p>• <strong>How long does it take <i className="font-normal">you</i> to</strong> prepare breakfast?</p>
    </div>
  </>
);
const Input = (
  <>
    <div className="w-full h-full laptop:snap-y laptop:snap-mandatory overflow-y-scroll no-scrollbar">
      <InputSimple
        title="Sentence Structure"
        redTitle="Complex Sentence Structures"
        col1={examples1}
        col2={examples2}
      />
      <Input1col
        title="How Long Does It Take To…?"
        redTitle="We use this chunk to talk about time, this is the structure when the question is about an action:"
        col1={examples4}
      />
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
        <h4 className="w-full p-4">
          Answer the questions below:
        </h4>
        <div className="w-full flex flex-col p-3 gap-4 h-fit bg-[#F3F5F7] rounded-xl justify-center pl-4">
          <p>What's the best memory you have of Christmas?</p>
          <p>Where do you like to spend New Year's Eve?</p>
          <p>What was your favorite holiday when you were a child?</p>
        </div>
      </div>
      <div className="hidden laptop:flex w-[36%] ">
        <Image src={PracticeImg} alt="" className="h-full rounded-r-lg"></Image>
      </div>
    </div>
  </div>
);

function LessonOne() {
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

export default LessonOne;
