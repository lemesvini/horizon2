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
      <div className="w-full h-full">
        <div className="w-full h-full p-2 snap-start">
          <div className="bg-white w-full h-[100dvh] tablet:h-[calc(100dvh-70px)] rounded-lg drop-shadow">
            <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
              <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
              <p className="px-3">|</p>
              <p>Simple Past</p>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 w-full p-3">
              <div className="w-full justify-center flex flex-col">
                <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                  Regular Verbs - add "ED"
                </p>
                <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  <p>[ verb + "ed" ]</p>
                </div>
                <div className="flex flex-col text-lg gap-2 border p-2 rounded mt-2">
                  <p>
                    I work<strong className="text-[#9E2A2B]">ed</strong> last
                    night.
                  </p>
                  <p>
                    She lik<strong className="text-[#9E2A2B]">ed</strong> my post.
                  </p>
                  <p>
                    He play<strong className="text-[#9E2A2B]">ed</strong> many
                    sports.
                  </p>
                </div>
                <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  <p>Verbs ending in [ consonant + "y" ] add "ies"</p>
                </div>
                <div className="flex flex-col text-lg gap-2 border p-2 rounded mt-2">
                  <p>
                    I stud<strong className="text-[#9E2A2B]">ied</strong> all
                    night.
                  </p>
                  <p>
                    She cr<strong className="text-[#9E2A2B]">ied</strong> when she
                    saw it.
                  </p>
                </div>
              </div>
  
              <div className="w-full justify-center flex flex-col">
                <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg mt-4 tablet:mt-0">
                  Irregular Verbs - New word
                </p>
                <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  <p>
                    [ Important!{" "}
                    <strong>
                      Do {">"} Did / Don't {">"} Didn't
                    </strong>{" "}
                    ]
                  </p>
                </div>
                <div className="flex flex-col text-lg gap-2 border p-2 rounded mt-2">
                  <p>
                    I <strong className="text-[#9E2A2B]">had</strong> rice and
                    beans for lunch.
                  </p>
                  <p>
                    She <strong className="text-[#9E2A2B]">saw</strong> my post.
                  </p>
                  <p>
                    He <strong className="text-[#9E2A2B]">went</strong> home after
                    the game.
                  </p>
                  <p>
                    I <strong className="text-[#9E2A2B]">took</strong> a taxi from
                    the airport.
                  </p>
                  <p>
                    I <strong className="text-[#9E2A2B]">got</strong> happy when I{" "}
                    <strong className="text-[#9E2A2B]">saw</strong> him.
                  </p>
                  <hr />
                  <p>
                    A: <strong className="text-[#9E2A2B]">Did</strong> you talk to
                    him?
                  </p>
                  <p>
                    B: No... I <strong className="text-[#9E2A2B]">didn't</strong>.
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
            <p>Would</p>
          </div>
          <div className="w-full flex justify-center">
            {/* <hr className="w-[98%]" /> */}
          </div>
          <div className="flex w-full p-3 flex-wrap justify-evenly">
            <div className="w-full laptop:w-[45%] justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                Would is a Modal Verb
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>We must pay attention to the next verb!</p>
              </div>
              {/* <hr className="mt-2" /> */}
              <div className="flex flex-col gap-2 laptop:h-[50dvh] justify-evenly mb-4 p-2 border rounded-lg">
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  I <strong className="text-[#9E2A2B] text-xl">would</strong>{" "}
                  like a coffee, please.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  She <strong className="text-[#9E2A2B] text-xl">would</strong>{" "}
                  buy this dress.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  We{" "}
                  <strong className="text-[#9E2A2B] text-xl">would not</strong>{" "}
                  have many pets in this house.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  He{" "}
                  <strong className="text-[#9E2A2B] text-xl">wouldn't</strong>{" "}
                  go to Italy.
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  <strong className="text-[#9E2A2B] text-xl">Would</strong> you
                  like to talk to her?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>Second Conditional</p>
          </div>
          {/* <div className="w-full flex justify-center">
                  <hr className="w-[98%]" />
                </div> */}
          <div className="flex w-full p-3 flex-wrap justify-evenly">
            <div className="w-full justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                [If + Simple Past + Would]
              </p>
              <div className="hidden tablet:flex flex-row justify-around border py-4 my-3 rounded-2xl">
                <div className="flex flex-col gap-4 text-xl">
                  <p className="font-bold">Condition</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faFeatherPointed}
                      className="text-[#123570]"
                    />{" "}
                    If I had more money
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faFeatherPointed}
                      className="text-[#123570]"
                    />{" "}
                    If I had more time
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faFeatherPointed}
                      className="text-[#123570]"
                    />{" "}
                    If I traveled more often
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faFeatherPointed}
                      className="text-[#123570]"
                    />{" "}
                    If I didn't work on Saturdays
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-xl">
                  <p className="font-bold">Consequence</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faFeatherPointed}
                      className="text-[#123570]"
                    />{" "}
                    I <strong className="text-[#9E2A2B]">would</strong> travel
                    around the world!
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faFeatherPointed}
                      className="text-[#123570]"
                    />{" "}
                    I <strong className="text-[#9E2A2B]">would</strong> exercise
                    more.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faFeatherPointed}
                      className="text-[#123570]"
                    />{" "}
                    I <strong className="text-[#9E2A2B]">would</strong> be
                    happy!
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faFeatherPointed}
                      className="text-[#123570]"
                    />{" "}
                    I <strong className="text-[#9E2A2B]">would</strong> sleep a
                    lot more.
                  </p>
                </div>
              </div>
              <div className="flex tablet:hidden flex-col border py-4 my-3 gap-3 px-2 text-justify rounded-2xl">
                <p className="text-xl">
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  If I had more money, I{" "}
                  <strong className="text-[#9E2A2B]">would</strong> travel
                  around the world.
                </p>
                <p className="text-xl">
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  If I had more time, I{" "}
                  <strong className="text-[#9E2A2B]">would</strong> exercise
                  more.
                </p>
                <p className="text-xl">
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  If I traveled more often, I{" "}
                  <strong className="text-[#9E2A2B]">would</strong> be happy.
                </p>
                <p className="text-xl">
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    className="text-[#123570]"
                  />{" "}
                  If I didn't work on Saturdays, I{" "}
                  <strong className="text-[#9E2A2B]">would</strong> sleep a lot
                  more.
                </p>
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
    <div className="w-full h-full">
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>Possessives</p>
          </div>
          <div className="w-full flex justify-center">
            {/* <hr className="w-[98%]" /> */}
          </div>
          <div className="flex w-full p-3 flex-wrap justify-evenly">
            <div className="w-full justify-center flex flex-col">
              <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
                PRONOUNS
              </p>
              <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>We have equivalents for each case!</p>
              </div>
              <br />
              {/* <hr className="mt-2" /> */}
              <div className="flex flex-row items-center justify-center p-2 border rounded-lg">
                <div className="flex flex-row w-full justify-around text-center p-3">
                  <div className="">
                    <p className="font-bold text-xl mb-2">Subjects</p>
                    <p className="text-lg">I</p>
                    <p className="text-lg">You</p>
                    <p className="text-lg">He</p>
                    <p className="text-lg">She</p>
                    <p className="text-lg">It</p>
                    <p className="text-lg">We</p>
                    <p className="text-lg">They</p>
                  </div>
                  <div className="">
                    <p className="font-bold text-xl mb-2">Adjectives</p>
                    <p className="text-lg">My</p>
                    <p className="text-lg">Your</p>
                    <p className="text-lg">His</p>
                    <p className="text-lg">Her</p>
                    <p className="text-lg">Its</p>
                    <p className="text-lg">Our</p>
                    <p className="text-lg">Their</p>
                  </div>
                  <div className="">
                    <p className="font-bold text-xl mb-2">Pronouns</p>
                    <p className="text-lg">Mine</p>
                    <p className="text-lg">Yours</p>
                    <p className="text-lg">His</p>
                    <p className="text-lg">Hers</p>
                    <p className="text-lg">Its</p>
                    <p className="text-lg">Ours</p>
                    <p className="text-lg">Theirs</p>
                  </div>
                </div>
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
function LessonEighteen() {
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
                <span className="hidden laptop:inline">Simple Past</span>
              </button>
              <button
                className={buttonClasses("Item2")}
                onClick={() => setSelectedPage("Item2")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline">Conditional</span>
              </button>
              <button
                className={buttonClasses("Item3")}
                onClick={() => setSelectedPage("Item3")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline">Pronouns</span>
              </button>
              <button
                className={buttonClasses("Item4")}
                onClick={() => setSelectedPage("Item4")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline">Future</span>
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

export default LessonEighteen;
