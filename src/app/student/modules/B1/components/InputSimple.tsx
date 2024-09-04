import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputSimple(props: any) {
  return (
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <div className="w-full h-full p-2 snap-start">
        <div className="bg-white w-full h-full flex flex-col rounded-lg drop-shadow">
          <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
            <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
            <p className="px-3">|</p>
            <p>{props.title}</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3 ">
            <hr className="w-[98%]" />
            <p className="text-center w-[90%] h-12 font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
              {props.redTitle}
            </p>
          </div>
          <div className="w-[90%] h-fit tablet:h-3/5 rounded gap-4 px-4 flex flex-col tablet:justify-around p-2 tablet:flex-row self-center border mt-4">
              <div>
                {props.ex1}
              </div>
              <div>
                {props.ex2}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const Input = (
//   <>
//     <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
//       <div className="w-full h-full p-2 snap-start">
//         <div className="bg-white w-full h-full rounded-lg drop-shadow">
//           <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
//             <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
//             <p className="px-3">|</p>
//             <p>The Articles</p>
//           </div>
//           <div className="w-full flex justify-center">
//             {/* <hr className="w-[98%]" /> */}
//           </div>
//           <div className="flex w-full p-3 flex-wrap justify-evenly">
//             <div className="w-full laptop:w-[45%] justify-center flex flex-col">
//               <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
//                 “A” is used before a consonant sound
//               </p>
//               <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
//                 <FontAwesomeIcon icon={faCircleExclamation} />
//                 <p>Consonant = not {"'"}A, E, I, O, U{"'"}</p>
//               </div>
//               {/* <hr className="mt-2" /> */}
//               <div className="flex flex-col gap-2 laptop:h-[50dvh] justify-evenly mb-4 p-2 border rounded-lg">
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   I have <strong className="text-[#9E2A2B] text-xl">a</strong>{" "}
//                   dog and you have{" "}
//                   <strong className="text-[#9E2A2B] text-xl">a</strong> cat.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   You have <strong className="text-[#9E2A2B] text-xl">a</strong>{" "}
//                   cat and I have{" "}
//                   <strong className="text-[#9E2A2B] text-xl">a</strong> parrot.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   I have <strong className="text-[#9E2A2B] text-xl">a</strong>{" "}
//                   red car
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   I am <strong className="text-[#9E2A2B] text-xl">a</strong>{" "}
//                   teacher
//                 </p>
//               </div>
//             </div>
//             <div className="w-full laptop:w-[45%] justify-center flex flex-col">
//               <p className="text-center font-bold text-xl p-2 text-white bg-[#9E2A2B] rounded-lg">
//                 “An” is used before a vowel sound
//               </p>
//               <div className="w-full p-2 mt-2 text-[#525252] flex flex-row items-center gap-2">
//                 <FontAwesomeIcon icon={faCircleExclamation} />
//                 <p>Vowel = {"'"}A, E, I, O, U{"'"}</p>
//               </div>
//               {/* <hr className="mt-2" /> */}
//               <div className="flex flex-col gap-2 laptop:h-[50dvh] justify-evenly mb-4 p-2 border rounded-lg">
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   I have <strong className="text-[#9E2A2B] text-xl">an</strong>{" "}
//                   <strong className="text-[#9E2A2B] text-xl">a</strong>pple.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   You have{" "}
//                   <strong className="text-[#9E2A2B] text-xl">an</strong>{" "}
//                   <strong className="text-[#9E2A2B] text-xl">i</strong>Phone.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   We have <strong className="text-[#9E2A2B] text-xl">an</strong>{" "}
//                   <strong className="text-[#9E2A2B] text-xl">a</strong>partment.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   They have{" "}
//                   <strong className="text-[#9E2A2B] text-xl">an</strong>{" "}
//                   <strong className="text-[#9E2A2B] text-xl">i</strong>
//                   nteresting story
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full laptop:h-full p-2 snap-start">
//         <div className="bg-white w-full h-full rounded-lg drop-shadow">
//           <div className="w-full flex flex-row items-center p-3 pt-4 text-3xl font-bold text-[#123572]">
//             <FontAwesomeIcon icon={faCirclePlus} className="pl-3" />
//             <p className="px-3">|</p>
//             <p>Verb to Be</p>
//           </div>
//           {/* <div className="w-full flex justify-center">
//             <hr className="w-[98%]" />
//           </div> */}
//           <div className="flex flex-wrap justify-evenly">
//             <div className="flex laptop:w-[30%] w-full justify-center flex-col">
//               <p className="p-2 m-3 rounded-lg bg-[#9E2A2B] text-white font-bold text-center flex items-center justify-center">
//                 I <FontAwesomeIcon icon={faCircleArrowRight} className="m-2" />{" "}
//                 {"'"}Am{"'"}
//               </p>
//               <hr className="mb-4 w-[90%] flex self-center" />
//               <div className="flex flex-col gap-4 p-3">
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   I <strong className="text-[#9E2A2B] text-xl">am</strong>{" "}
//                   brazilian.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   I <strong className="text-[#9E2A2B] text-xl">am</strong> a
//                   teacher.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   I <strong className="text-[#9E2A2B] text-xl">am not</strong>{" "}
//                   brazilian.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   I <strong className="text-[#9E2A2B] text-xl">am not</strong> a
//                   teacher.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   <strong className="text-[#9E2A2B] text-xl">Am I</strong>{" "}
//                   brazilian?
//                 </p>
//                 {/* <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   <strong className="text-[#9E2A2B] text-xl">Am I</strong> a
//                   teacher?
//                 </p> */}
//               </div>
//             </div>
//             <div className="flex laptop:w-[30%] w-full justify-center flex-col">
//               <p className="p-2 m-3 rounded-lg bg-[#9E2A2B] text-white font-bold text-center flex items-center justify-center">
//                 You, We, They{" "}
//                 <FontAwesomeIcon icon={faCircleArrowRight} className="m-2" />{" "}
//                 {"'"}Are{"'"}
//               </p>
//               <hr className="mb-4 w-[90%] flex self-center" />
//               <div className="flex flex-col gap-4 p-3">
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   You <strong className="text-[#9E2A2B] text-xl">are</strong> a
//                   doctor.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   We <strong className="text-[#9E2A2B] text-xl">are</strong>{" "}
//                   friends.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   They{" "}
//                   <strong className="text-[#9E2A2B] text-xl">are not</strong>{" "}
//                   brazilian.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   You <strong className="text-[#9E2A2B] text-xl">aren{"'"}t</strong>{" "}
//                   a teacher.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   <strong className="text-[#9E2A2B] text-xl">Are we</strong>{" "}
//                   students?
//                 </p>
//                 {/* <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   <strong className="text-[#9E2A2B] text-xl">Are they</strong>{" "}
//                   friends?
//                 </p> */}
//               </div>
//             </div>
//             <div className="flex laptop:w-[30%] w-full justify-center flex-col">
//               <p className="p-2 m-3 rounded-lg bg-[#9E2A2B] text-white font-bold text-center flex items-center justify-center">
//                 He, She, It{" "}
//                 <FontAwesomeIcon icon={faCircleArrowRight} className="m-2" />{" "}
//                 {"'"}Is{"'"}
//               </p>
//               <hr className="mb-4 w-[90%] flex self-center" />
//               <div className="flex flex-col gap-4 p-3">
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   He <strong className="text-[#9E2A2B] text-xl">is</strong>{" "}
//                   brazilian.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   She <strong className="text-[#9E2A2B] text-xl">is</strong> a
//                   teacher.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   It <strong className="text-[#9E2A2B] text-xl">is not</strong>{" "}
//                   good.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   He <strong className="text-[#9E2A2B] text-xl">isn{"'"}t</strong>{" "}
//                   happy.
//                 </p>
//                 <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   <strong className="text-[#9E2A2B] text-xl">Is he</strong>{" "}
//                   brazilian?
//                 </p>
//                 {/* <p>
//                   <FontAwesomeIcon
//                     icon={faFeatherPointed}
//                     className="text-[#123570]"
//                   />{" "}
//                   <strong className="text-[#9E2A2B] text-xl">Is she</strong> a
//                   teacher?
//                 </p> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// );
