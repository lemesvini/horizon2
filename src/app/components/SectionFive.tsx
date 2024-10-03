"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function ProdCard(props: any) {
  const router = useRouter();
  const route = props.link as string || "/";
  return (
    <div className="bg-white p-6 h-60 border-t-8 border-blue-950 w-60 drop-shadow-lg hover:scale-[1.02]   flex-shrink-0 ">
      <div className="flex flex-col pb-2">
        <span className="flex font-black text-4xl tracking-wide text-[#003256]">
          {props.product}
        </span>
        <span className="flex text-3xl tracking-wide text-slate-500">
          {props.type}
        </span>
      </div>
      <hr />
      <div className="flex flex-col gap-2 py-3">
        <span className="text-[#003256]">{props.desc}</span>
        <span className="text-[#003256]">{props.desc2}</span>
      </div>
      <br />
      <Link href={route}>
        <button className="absolute bottom-0 right-0 p-6 hover:underline hover:cursor-pointer text-slate-500">
          Ver mais...
        </button>
      </Link>
    </div>
  );
}

export default function SectionFive() {
  return (
    <>
      <motion.div
        className="bg-slate-100 gap-1 h-fit px-3 w-full flex flex-col"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ amount: 0.5 }}
      >
        <br />
        <h2 className="font-bold text-xl text-blue-500 p-6">
          Material Didático Digital
        </h2>
        <div className="flex flex-row tablet:justify-center overflow-x-scroll items-center gap-2 p-6 no-scrollbar">
          {/* <div className="absolute items-center justify-center flex text-white right-5 w-12 h-12 rounded-full z-50 bg-slate-200">
            <p>►</p>
          </div> */}
          <ProdCard
            badgebgcolor="#cc4b54"
            product="A1-A2"
            type="module"
            badge="18 Lesson Plans"
            desc="► 18 lesson plans"
            desc2="► Student's E-book"
            link="/docs/mdd#mdda1a2"
          />
          <ProdCard
            badgebgcolor="#cc4b54"
            product="B1"
            type="module"
            badge="18 Lesson Plans"
            desc="► 30 lesson plans"
            desc2="► Student's E-book"
            link="/docs/mdd#mddb1"
          />
          <ProdCard
            badgebgcolor="#cc4b54"
            product="B2"
            type="module"
            badge="18 Lesson Plans"
            desc=""
            desc2="Coming Soon..."
            link="/"
          />
          {/* <ProdCard
            badgebgcolor="#cc4b54"
            product="C1"
            type="module"
            badge="18 Lesson Plans"
            desc="30 lesson plans"
            link="/docs/moduleC1"
          /> */}
          <ProdCard
            badgebgcolor="#cc4b54"
            product="A1-A2"
            type="conversation"
            badge="18 Lesson Plans"
            desc="► Monthly Updated"
            desc2="► Practice focused"
            link="/docs/mdd#mddConv"
          />
          <ProdCard
            badgebgcolor="#cc4b54"
            product="B1+"
            type="conversation"
            badge="18 Lesson Plans"
            desc="► Monthly Updated"
            desc2="► Choose from gallery"
            link="/docs/mdd#mddConv"
          />
        </div>
        <h2 className="font-bold text-xl text-blue-500 p-6">
          Para o seu aluno
        </h2>
        <div className="flex flex-row tablet:justify-center overflow-x-scroll items-center gap-2 p-6 no-scrollbar">
          <ProdCard
            badgebgcolor="#cc4b54"
            product="Acesso"
            type="do aluno"
            desc="► Aulas do módulo"
            desc2="► E-Book e Homework"
            link="/docs/studentaccess"
          />
          <ProdCard
            badgebgcolor="#cc4b54"
            product="E-Book"
            type="for students"
            desc="► All lessons"
            desc2="► Prepare & Review"
            link="/docs/ebooks"
          />
          <ProdCard
            badgebgcolor="#cc4b54"
            product="Written"
            type="Practice"
            desc="► Homework"
            desc2="► All lessons"
            link="/docs/writtenpractice"
          />
          <ProdCard
            badgebgcolor="#cc4b54"
            product="Speaking"
            type="Buddies"
            desc="► Clube de conversação"
            desc2="► Alunos nível A1-A2"
            link="/docs/speakingbuddies"
          />
          <ProdCard
            badgebgcolor="#cc4b54"
            product="Speaking"
            type="Buddies+"
            desc="► Clube de conversação"
            desc2="► Alunos nível B1+"
            link="/docs/speakingbuddiesplus"
          />
        </div>
      </motion.div>
      <br />
    </>
  );
}
