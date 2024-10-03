"use client"
import DocsHeader from "./Header";
import Image from "next/image";
import LpImg from "../../../public/src/docslp.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function DocsLp() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col h-[100dvh]">
        <DocsHeader />
        <div className="h-full w-full flex p-2 justify-center items-center">
          <div className="bg-white rounded-xl drop-shadow h-[90%] w-[90%] flex flex-col laptop:flex-row justify-center items-center">
            <div className="flex grow p-12 items-center justify-center">
              <div className="relative w-full h-full max-w-[500px] max-h-[500px] flex justify-center items-cente">
                <Image
                  src={LpImg}
                  alt="Document image"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex flex-col grow laptop:border-l h-[90%] items-center justify-center">
              <span className="text-xl text-slate-700 font-bold">Acesso rápido:</span>
              <span className="border-b w-[70%] flex mt-3"></span>
              <div className="flex flex-col gap-4 p-12 font-semibold text-slate-600">
                <div onClick={() => router.push("/docs/introduction")} className="flex flex-row items-center gap-2 hover:border-b hover:cursor-pointer justify-between">
                  <a href="/docs/introduction">Cadastro de alunos</a>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </div>
                <div onClick={() => router.push("/docs/demo")} className="flex flex-row items-center gap-2 hover:border-b hover:cursor-pointer justify-between">
                  <a href="/docs/demo">Demonstração</a>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </div>
                <div onClick={() => router.push("/docs/mdd")} className="flex flex-row items-center gap-2 hover:border-b hover:cursor-pointer justify-between">
                  <a href="/docs/mdd">Material Didático Digital</a>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
