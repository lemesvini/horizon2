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
const TitleColor = "#335C67";
const input1 = (
  <>
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <div className="w-full h-full p-2 snap-start">
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
                <p>Consonant = not "A, E, I, O, U"</p>
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
                <p>Vowel = "A, E, I, O, U"</p>
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
                "Am"
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
                "Are"
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
                  You <strong className="text-[#9E2A2B] text-xl">aren't</strong>{" "}
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
                "Is"
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
                  He <strong className="text-[#9E2A2B] text-xl">isn't</strong>{" "}
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
const input2 = (
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
const input3 = (
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
const input4 = (
  <>
    <div className="w-full h-full">
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full laptop:h-full rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>Object Pronouns</p>
          </div>
          <div className="w-full flex justify-center">
            {/* <hr className="w-[98%]" /> */}
          </div>
          <div className="flex w-full h-fit p-3 flex-col laptop:flex-row gap-3 justify-evenly">
            <div className="flex w-full h-full flex-col">
              <br />
              <span className="p-3 bg-[#9E2A2B] w-[80%] self-center text-white flex rounded-xl items-center justify-center text-xl font-bold">
                We use them to refer to people and things:
              </span>
              <br />
              <div className="flex flex-col gap-5 p-4 text-center text-xl">
                <p>
                  "I like <strong className="text-[#9e2a2b]">him</strong> but he
                  doesn't like <strong className="text-[#9e2a2b]">me</strong>."
                </p>
                <p>
                  "She called <strong className="text-[#9e2a2b]">us</strong>{" "}
                  yesterday."
                </p>
                <p>
                  "The new student is rude and I don't like{" "}
                  <strong className="text-[#9e2a2b]">him</strong>."
                </p>
                <p>
                  "She wears dresses during summer because she likes{" "}
                  <strong className="text-[#9e2a2b]">it</strong>."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
function LessonFive() {
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
                <span className="hidden laptop:inline"> To Be / A, An</span>
              </button>
              <button
                className={buttonClasses("Item2")}
                onClick={() => setSelectedPage("Item2")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline"> Auxiliaries</span>
              </button>
              <button
                className={buttonClasses("Item3")}
                onClick={() => setSelectedPage("Item3")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline"> 3rd person</span>
              </button>
              <button
                className={buttonClasses("Item4")}
                onClick={() => setSelectedPage("Item4")}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="px-2" />
                <span className="hidden laptop:inline"> Object Pronouns</span>
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

export default LessonFive;
