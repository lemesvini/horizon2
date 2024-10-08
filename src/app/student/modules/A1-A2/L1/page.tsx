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
  faCirclePause,
  faCirclePlay,
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
const LTitle = "LESSON ONE";
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
          Guys, como posso organizar minha vida para aprender a falar inglês?
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
            <p className="font-bold">Hello</p>
            <p className="font-extralight">Olá</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Hi</p>
            <p className="font-extralight">Oi</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">How are you?</p>
            <p className="font-extralight">Como vai?</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">What{"'"}s up?</p>
            <p className="font-extralight">E ai?</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Bye</p>
            <p className="font-extralight">Tchau</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2">
            <p className="font-bold">Goodbye</p>
            <p className="font-extralight">Adeus</p>
          </div>
        </div>
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">I{"'"}m fine</p>
            <p className="font-extralight">Estou bem</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">I{"'"}m great</p>
            <p className="font-extralight">Estou ótimo</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Excuse me</p>
            <p className="font-extralight">Com licença</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Please</p>
            <p className="font-extralight">Por favor</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">Thank you</p>
            <p className="font-extralight">Obrigado(a)</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2">
            <p className="font-bold">Can you repeat, please?</p>
            <p className="font-extralight">Pode repetir, por favor?</p>
          </div>
        </div>
        <div className="bg-white h-[49%] w-full rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">I</p>
            <p className="font-extralight">Eu</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">You</p>
            <p className="font-extralight">Você</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">We</p>
            <p className="font-extralight">Nós</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">They</p>
            <p className="font-extralight">Eles, Elas</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">A / An</p>
            <p className="font-extralight">Um, Uma</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2">
            <p className="font-bold">The</p>
            <p className="font-extralight">O / A / Os / As</p>
          </div>
        </div>
        <div className="bg-white h-[49%] w-full  rounded-lg laptop:w-[48%] m-1 flex flex-col justify-evenly">
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">to Be / Was, Were / Been</p>
            <p className="font-extralight">Ser, Estar</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">I am (not)</p>
            <p className="font-extralight">Eu (não) sou / estou</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">You are (not)</p>
            <p className="font-extralight">Você (não) é / está</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">to Work / Worked / Worked</p>
            <p className="font-extralight">Trabalhar</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2 border-b-2 border-dotted">
            <p className="font-bold">to Study / Studied / Studied </p>
            <p className="font-extralight">Estudar</p>
          </div>
          <div className="w-full flex flex-row justify-between p-2">
            <p className="font-bold">Teacher</p>
            <p className="font-extralight">Professor (a)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const Input = (
  <>
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <div className="w-full laptop:h-full p-2 snap-start">
        <div className="bg-white w-full h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>The Articles</p>
          </div>
          <div className="w-full flex justify-center">
            {/* <hr className="w-[98%]" /> */}
          </div>
          <div className="flex w-full p-3 flex-wrap justify-evenly">
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                “A” is used before a consonant sound
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>
                  Consonant = not {"'"}A, E, I, O, U{"'"}
                </p>
              </div>
              {/* <hr className="mt-2" /> */}
              <div className="flex flex-col gap-2 laptop:h-[50dvh] justify-evenly mb-4 p-2 border rounded-lg">
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  I have <strong className="text-[#9E2A2B] text-xl">a</strong>{" "}
                  dog and you have{" "}
                  <strong className="text-[#9E2A2B] text-xl">a</strong> cat.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  You have <strong className="text-[#9E2A2B] text-xl">a</strong>{" "}
                  cat and I have{" "}
                  <strong className="text-[#9E2A2B] text-xl">a</strong> parrot.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  I have <strong className="text-[#9E2A2B] text-xl">a</strong>{" "}
                  red car
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  I am <strong className="text-[#9E2A2B] text-xl">a</strong>{" "}
                  teacher
                </p>
              </div>
            </div>
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                “An” is used before a vowel sound
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>
                  Vowel = {"'"}A, E, I, O, U{"'"}
                </p>
              </div>
              {/* <hr className="mt-2" /> */}
              <div className="flex flex-col gap-2 laptop:h-[50dvh] justify-evenly mb-4 p-2 border rounded-lg">
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  I have <strong className="text-[#9E2A2B] text-xl">an</strong>{" "}
                  <strong className="text-[#9E2A2B] text-xl">a</strong>pple.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  You have{" "}
                  <strong className="text-[#9E2A2B] text-xl">an</strong>{" "}
                  <strong className="text-[#9E2A2B] text-xl">i</strong>Phone.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  We have <strong className="text-[#9E2A2B] text-xl">an</strong>{" "}
                  <strong className="text-[#9E2A2B] text-xl">a</strong>partment.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  They have{" "}
                  <strong className="text-[#9E2A2B] text-xl">an</strong>{" "}
                  <strong className="text-[#9E2A2B] text-xl">i</strong>
                  nteresting story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full laptop:h-full p-2 snap-start">
        <div className="bg-white w-full h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>Verb to Be</p>
          </div>
          {/* <div className="w-full flex justify-center">
            <hr className="w-[98%]" />
          </div> */}
          <div className="flex flex-wrap justify-evenly">
            <div className="flex laptop:w-[30%] w-full justify-center flex-col">
              <p className="p-2 m-3 rounded-lg bg-[#9E2A2B] text-white font-bold text-center flex items-center justify-center">
                I <FontAwesomeIcon icon={faCircleArrowRight} className="m-2" />{" "}
                {"'"}Am{"'"}
              </p>
              <hr className="mb-4 w-[90%] flex self-center" />
              <div className="flex flex-col gap-4 p-3">
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  I <strong className="text-[#9E2A2B] text-xl">am</strong>{" "}
                  brazilian.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  I <strong className="text-[#9E2A2B] text-xl">am</strong> a
                  teacher.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  I <strong className="text-[#9E2A2B] text-xl">am not</strong>{" "}
                  brazilian.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  I <strong className="text-[#9E2A2B] text-xl">am not</strong> a
                  teacher.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  <strong className="text-[#9E2A2B] text-xl">Am I</strong>{" "}
                  brazilian?
                </p>
                {/* <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  <strong className="text-[#9E2A2B] text-xl">Am I</strong> a
                  teacher?
                </p> */}
              </div>
            </div>
            <div className="flex laptop:w-[30%] w-full justify-center flex-col">
              <p className="p-2 m-3 rounded-lg bg-[#9E2A2B] text-white font-bold text-center flex items-center justify-center">
                You, We, They{" "}
                <FontAwesomeIcon icon={faCircleArrowRight} className="m-2" />{" "}
                {"'"}Are{"'"}
              </p>
              <hr className="mb-4 w-[90%] flex self-center" />
              <div className="flex flex-col gap-4 p-3">
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  You <strong className="text-[#9E2A2B] text-xl">are</strong> a
                  doctor.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  We <strong className="text-[#9E2A2B] text-xl">are</strong>{" "}
                  friends.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  They{" "}
                  <strong className="text-[#9E2A2B] text-xl">are not</strong>{" "}
                  brazilian.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  You{" "}
                  <strong className="text-[#9E2A2B] text-xl">aren{"'"}t</strong>{" "}
                  a teacher.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  <strong className="text-[#9E2A2B] text-xl">Are we</strong>{" "}
                  students?
                </p>
                {/* <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  <strong className="text-[#9E2A2B] text-xl">Are they</strong>{" "}
                  friends?
                </p> */}
              </div>
            </div>
            <div className="flex laptop:w-[30%] w-full justify-center flex-col">
              <p className="p-2 m-3 rounded-lg bg-[#9E2A2B] text-white font-bold text-center flex items-center justify-center">
                He, She, It{" "}
                <FontAwesomeIcon icon={faCircleArrowRight} className="m-2" />{" "}
                {"'"}Is{"'"}
              </p>
              <hr className="mb-4 w-[90%] flex self-center" />
              <div className="flex flex-col gap-4 p-3">
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  He <strong className="text-[#9E2A2B] text-xl">is</strong>{" "}
                  brazilian.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  She <strong className="text-[#9E2A2B] text-xl">is</strong> a
                  teacher.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  It <strong className="text-[#9E2A2B] text-xl">is not</strong>{" "}
                  good.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  He{" "}
                  <strong className="text-[#9E2A2B] text-xl">isn{"'"}t</strong>{" "}
                  happy.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  <strong className="text-[#9E2A2B] text-xl">Is he</strong>{" "}
                  brazilian?
                </p>
                {/* <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  <strong className="text-[#9E2A2B] text-xl">Is she</strong> a
                  teacher?
                </p> */}
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
        <h4 className="w-full p-4">
          Complete the dialog and practice with your teacher!
        </h4>
        <div className="w-full flex flex-col p-3 gap-4 h-fit bg-[#F3F5F7] rounded-xl justify-center pl-4">
          <p>
            A: Hello! _________ teacher Lex! And you,{" "}
            <strong>what’s your name?</strong>
          </p>
          <p>B: Hey, teacher! I’m _________.</p>
          <p>A: How are you doing?</p>
          <p>B: _________, and you?</p>
          <p>
            A: <strong>I’m great! </strong>Thanks!
          </p>
        </div>
      </div>
      <div className="hidden laptop:flex w-[36%] ">
        <Image src={PracticeImg} alt="" className="h-full rounded-r-lg"></Image>
      </div>
    </div>
  </div>
);

function LessonOne() {
  const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = useRef(new Audio(audioFile));

  const togglePlayPause = () => {
    if (isPlaying) {
      // audioRef.current.pause();
      console.log("audio toggled");
    } else {
      // audioRef.current.play();
      console.log("audio toggled");
    }
    setIsPlaying(!isPlaying);
  };

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
                {/* <audio src="./lesson1.mp3"></audio> */}
                <button
                  className="absolute items-center justify-center mx-2 w-6 h-6 hover:text-blue-600"
                  onClick={togglePlayPause}
                >
                  <FontAwesomeIcon
                    icon={isPlaying ? faCirclePause : faCirclePlay}
                  />
                </button>
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
