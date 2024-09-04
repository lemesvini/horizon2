"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function SectionOne() {
  return (
    <>
      <div className="flex flex-col w-full h-[70dvh] items-center justify-center p-3 bg-white">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="tablet:hidden">
            <p className="text-4xl text-[#0C304F] font-semibold text-center">
              by teachers,
            </p>
            <p className="text-4xl text-[#0C304F] font-semibold text-center">
              for teachers.
            </p>
          </div>
          <p className="hidden tablet:flex tablet:text-6xl text-[#0C304F] font-semibold text-center">
            by teachers, for teachers.
          </p>
          <hr className="m-6 w-full" />
          <p className="text-center text-slate-400 w-[90%] tablet:w-[60%]">
            Plataformas, material didático, suporte pedagógico...
          </p>
          <p className="text-center text-slate-400 w-[80%] tablet:w-[60%]">
            You name it! We have it all - for you!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link href="https://wa.me/message/EMVKG6FU7VXTI1" target="_blank">
            <Button className="p-3 bg-blue-600 mt-12 rounded-xl text-white font-bold ">Agendar Demonstração</Button>
          </Link>
          
        </motion.div>
      </div>
    </>
  );
}
