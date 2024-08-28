"use client";
import { useRef } from "react";
import LPHeader from "@/components/LPHeader";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  // const secondSectionRef = useRef<HTMLDivElement>(null);

  // const scrollToNextSection = () => {
  //   if (secondSectionRef.current) {
  //     secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <LPHeader />
      <div className="snap-y snap-mandatory h-[calc(100vh-90px)] mt-[90px]">
        <div className="flex h-full bg-[#0A3153] text-white snap-start items-start justify-center relative">
          <div className="flex h-full w-full laptop:w-9/12 justify-center">
            <div className="flex flex-col laptop:flex-row items-center h-full justify-center gap-8 text-white pb-12">
              <div className="flex flex-col text-5xl tracking-wide leading-relaxed font-serif laptop:border-r laptop:pr-12">
                <span>
                  by <strong>teachers</strong>,
                </span>
                <span>
                  <strong>for</strong> teachers.
                </span>
              </div>
              <div className="flex laptop:hidden w-[90%] border-b"></div>
              <p className="w-96 text-justify p-6 laptop:p-0 text-[#bfbfbf]">
                Aulas particulares sem a preocupação de criar um material{" "}
                <strong className="text-white">do zero</strong>. Temos tudo o
                que você precisa para aulas com qualidade e conforto - para você
                e para os seus alunos!
              </p>
            </div>
          </div>
          <Link className="absolute bottom-16" href={"https://wa.me/message/EMVKG6FU7VXTI1"} target="_blank">
            <button
              className="w-full p-3 rounded-xl bg-white font-bold text-[#0A3153] hover:cursor-pointer hover:scale-125"
              // onClick={scrollToNextSection}
            >
              Saiba mais
            </button>
          </Link>
        </div>
        {/* <div
          // ref={secondSectionRef}
          className="flex h-full bg-white text-black snap-start"
        >
          <div className="flex w-full h-full bg-white text-black snap-start">
            <div className="flex w-full flex-wrap laptop:flex-row gap-4 laptop:items-center justify-center">
              <div className="flex flex-col text-justify items-center laptop:justify-evenly gap-4 justify-center p-4">
                <span className="text-3xl tracking-wide leading-relaxed font-serif font-bold">
                  Teacher's Dashboard
                </span>
                <Link
                  href="https://wa.me/message/EMVKG6FU7VXTI1"
                  target="blank"
                >
                  <div className="bg-[#9E2A2B] text-white px-4 py-2 rounded-2xl font-bold hover:scale-110 hover:cursor-pointer">
                    Solicitar uma demonstração
                  </div>
                </Link>
              </div>
              <div className="flex w-80 laptop:h-80 h-60 border rounded-lg drop-shadow bg-white">
                <Image
                  src={""}
                  alt=""
                  style={{
                    objectFit: "cover",
                    // position: "absolute",
                    // top: 0,
                    backgroundPosition: "left"
                  }}
                />
              </div>
              <div className="flex w-80 laptop:h-80 h-60 border rounded-lg drop-shadow bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full bg-white text-black snap-start">
          <div className="flex w-full flex-wrap laptop:flex-row gap-4 laptop:items-center justify-center">
            <div className="flex flex-col text-justify items-center laptop:justify-evenly gap-4 justify-center p-4">
              <span className="text-3xl tracking-wide leading-relaxed font-serif font-bold">
                Student´s Dashboard
              </span>
              <Link href="https://wa.me/message/EMVKG6FU7VXTI1" target="blank">
                <div className="bg-[#9E2A2B] text-white px-4 py-2 rounded-2xl font-bold hover:scale-110 hover:cursor-pointer">
                  Solicitar uma demonstração
                </div>
              </Link>
            </div>
            <div className="flex w-80 laptop:h-80 h-60 border rounded-lg drop-shadow bg-white"></div>
            <div className="flex w-80 laptop:h-80 h-60 border rounded-lg drop-shadow bg-white"></div>
          </div>
        </div>
        <div className="flex flex-col laptop:flex-row h-full w-full items-center justify-center bg-[#0A3153] gap-3 snap-start">
          <div className="flex bg-white rounded-lg drop-shadow h-40 laptop:h-80 w-80">
            card1
          </div>
          <div className="flex bg-white rounded-lg drop-shadow h-40 laptop:h-80 w-80">
            card1
          </div>
          <div className="flex bg-white rounded-lg drop-shadow h-40 laptop:h-80 w-80">
            card1
          </div>
        </div> */}
      </div>
    </>
  );
}
