"use client";
import Link from "next/link";
import { Button } from "react-bootstrap";
import fundo from "../../../public/src/fundo.png";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function ChooseLogin() {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div
      className="relative flex p-2 h-screen w-full bg-cover bg-center bg-no-repeat items-center justify-center"
      style={{ backgroundImage: `url(${fundo.src})` }}
    >
      <div className="flex flex-col items-center justify-center gap-6 bg-white h-fit py-12 px-12 w-fit rounded-xl drop-shadow-xl">
        <p className="text-[#18477B] text-2xl font-bold">I am a...</p>
        <div className="flex flex-col tablet:flex-row gap-3">
          <div
            className="flex flex-col border items-center justify-evenly bg-slate-200 rounded-2xl w-52 h-52 hover:scale-105 hover:border hover:cursor-pointer"
            onClick={() => handleRedirect('/login/teacher')}
          >
            <FontAwesomeIcon icon={faBriefcase} className="w-28 h-28 text-[#18477B]" />
            <p className="text-[#18477B] text-xl font-bold">Teacher</p>
          </div>
          <div
            className="flex flex-col border items-center justify-evenly bg-slate-200 rounded-2xl w-52 h-52 hover:scale-105 hover:border hover:cursor-pointer"
            onClick={() => handleRedirect('/login/student')}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="w-28 h-28 text-[#18477B]" />
            <p className="text-[#18477B] text-xl font-bold">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}
