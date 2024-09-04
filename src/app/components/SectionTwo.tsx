"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import stockImg from "../../../public/one.jpg";

export default function SectionTwo() {
  return (
    <>
      <motion.div
        className="bg-slate-100 h-[70dvh] flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex w-[93%] laptop:w-[80%] h-[80%] drop-shadow-lg rounded-2xl  bg-white justify-between">
          <div className="flex flex-col p-12 justify-center items-center grow gap-2 text-justify">
            <p className="text-xl tablet:text-3xl mb-6 font-bold text-blue-500">Go Beyond the Horizon</p>
            <p className="text-slate-600">
              Nosso material didático consegue se adaptar ao ritmo das suas
              aulas e ao ritmo de aprendizado dos seus alunos!
            </p>
            <p className="text-slate-600">
              Usamos o Common European Framework Of Reference (CEFR) para
              padronizar o nível dos Lesson Plans.
            </p>
            <p className="text-slate-600">
              Não limite suas aulas à um cronograma predefinido: defina qual o
              melhor caminho seguir de acordo com o desempenho dos seus alunos
              durante as aulas :{")"}
            </p>
          </div>
          <Image
            src={stockImg}
            alt=""
            height={200}
            width={400}
            objectFit="contain"
            className="hidden laptop:flex rounded-r-lg"
          ></Image>
        </div>
      </motion.div>
    </>
  );
}
