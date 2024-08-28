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

const LTitle = "UNIT REVIEW";
const TitleColor = "#99C286";
const input1 = (
  <>
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>Wh-Questions</p>
          </div>
          <div className="flex flex-col w-full p-3 items-center">
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                What - General
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>{"'"}What is your address?{"'"}</p>
              </div>
            </div>
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                When - Date, Time
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>{"'"}When is your trip to the USA?{"'"}</p>
              </div>
            </div>
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Where - Location
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>{"'"}Where is the gas station?{"'"}</p>
              </div>
            </div>
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Who - Person
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>{"'"}Who is that boy?{"'"}</p>
              </div>
            </div>
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Why - Reason
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>{"'"}Why do you like Brazil?{"'"}</p>
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
            <p>There to Be</p>
          </div>
          <div className="flex flex-wrap justify-evenly">
            <div className="flex laptop:w-[30%] w-full justify-center flex-col">
              <p className="p-2 m-3 rounded-lg bg-[#9E2A2B] text-white font-bold text-center flex items-center justify-center">
                Affirmative
              </p>
              <hr className="mb-4 w-[90%] flex self-center" />
              <div className="flex flex-col gap-12 p-3">
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  There is a song playing.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  There is a car in the garage.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  There are people in this house.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  There are toys on the couch.
                </p>
              </div>
            </div>
            <div className="flex laptop:w-[30%] w-full justify-center flex-col">
              <p className="p-2 m-3 rounded-lg bg-[#9E2A2B] text-white font-bold text-center flex items-center justify-center">
                Negative
              </p>
              <hr className="mb-4 w-[90%] flex self-center" />
              <div className="flex flex-col gap-12 p-3">
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  There is not a song playing.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  There isn{"'"}t a car in the garage.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  There are not people in this house.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  There aren{"'"}t toys on the couch.
                </p>
              </div>
            </div>
            <div className="flex laptop:w-[30%] w-full justify-center flex-col">
              <p className="p-2 m-3 rounded-lg bg-[#9E2A2B] text-white font-bold text-center flex items-center justify-center">
                Interrogative
              </p>
              <hr className="mb-4 w-[90%] flex self-center" />
              <div className="flex flex-col gap-12 p-3">
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  Is there a song playing?
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  Is there a car in the garage?
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  Are there people in this house?
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  Are there toys on the couch?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
const input2 = (
  <>
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>Comparatives</p>
          </div>
          <div className="flex flex-col tablet:flex-row justify-around w-full p-3 items-center">
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Short Adjectives - Add {"'"}er{"'"}
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>[ adjective + {"'"}er{"'"} + than ]</p>
              </div>
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A:Are you tall<strong>er than</strong> your father?
                </p>
                <p>
                  B: No, but I am tall<strong>er than</strong> my mother!
                </p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: Is he old<strong>er than</strong> you?
                </p>
                <p>
                  B: No, I am old<strong>er than</strong> him, actually.
                </p>
              </div>
            </div>
            <br className="block tablet:hidden" />
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Long Adjectives - Use {"'"}more{"'"} / {"'"}less{"'"}
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>[ {"'"}more{"'"} / {"'"}less{"'"} + adjective + {"'"}than{"'"} ]</p>
              </div>
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: Are you <strong>more interested than</strong> him?
                </p>
                <p>
                  B: Oh, I{"'"}m way <strong>more interested</strong>. Trust me!
                </p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: You are <strong>more beautiful than</strong> her.
                </p>
                <p>B: Really? Thank you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
const input3 = (
  <>
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>Superlatives</p>
          </div>
          <div className="flex flex-col tablet:flex-row justify-around w-full p-3 items-center">
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Short Adjectives - Add {"'"}est{"'"}
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>[ "the" + adjective + "est" ]</p>
              </div>
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A:Are you the tall<strong>est</strong> in your family?
                </p>
                <p>
                  B: No, but I am the tall<strong>est</strong> in my friend
                  group!
                </p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: Is he the old<strong>est</strong> student?
                </p>
                <p>
                  B: No, I am old<strong>er than</strong> him, actually.
                </p>
              </div>
            </div>
            <br className="block tablet:hidden" />
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Long Adjectives - Use "most" / "least"
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>[ "the" + "most" / "least" + adjective ]</p>
              </div>
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: She is <strong>the most intelligent</strong> person here,
                  ask her!
                </p>
                <p>B: Okay, thank you!</p>
              </div>
              <br className="hidden tablet:block" />
              <br className="hidden tablet:block" />
              <div className="flex flex-col text-lg gap-2 border p-2 rounded">
                <p>
                  A: You are the <strong>most dedicated</strong> person I know.
                </p>
                <p>B: Really? Thank you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
const input4 = (
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
                  A: You <strong>should</strong> say you're sorry!
                </p>
                <p>
                  B: I know I <strong>should</strong> but I{" "}
                  <strong>can't</strong>...
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
                  B: I think you <strong>shouldn't</strong> go now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
function LessonTwelve() {
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
        <div className="fixed flex pt-14 w-full">
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
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline"> There to Be</span>
              </button>
              <button
                className={buttonClasses("Item2")}
                onClick={() => setSelectedPage("Item2")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline"> Comparatives</span>
              </button>
              <button
                className={buttonClasses("Item3")}
                onClick={() => setSelectedPage("Item3")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline"> Superlatives</span>
              </button>
              <button
                className={buttonClasses("Item4")}
                onClick={() => setSelectedPage("Item4")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline"> Modal Verbs</span>
              </button>
            </div>
          </div>
        </div>
        <div className="z-1 h-screen pt-32 laptop:pt-14 laptop:pl-64">
          {selectedPage === "Item1" && input1}
          {selectedPage === "Item2" && input2}
          {selectedPage === "Item3" && input3}
          {selectedPage === "Item4" && input4}
        </div>
      </>
    );
  } else {
    router.push("/login");
  }
}

export default LessonTwelve;
