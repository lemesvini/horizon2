"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderLogo from "../../../public/horizonheaderlogoBLUE.png";
import { useRouter } from "next/navigation";

export default function LPHeader() {
  const router = useRouter();

  function goToStudent() {
    router.push("/login/student");
  }
  function goToTeacher() {
    router.push("/login/teacher");
  }
  function goToDocs() {
    router.push("/docs");
  }
  function GoToContact() {
    router.push("https://wa.me/message/EMVKG6FU7VXTI1")
  }
  return (
    <div className="bg-white drop-shadow flex h-20 justify-center items-center w-full gap-2">
      <div className="flex gap-8 text-slate-500">
        <motion.div
          className="absolute left-5 hover:cursor-pointer self-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "Tween" }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={HeaderLogo} alt="" width={150} height={100}></Image>
        </motion.div>
        <div className="flex flex-row items-center gap-5">
          <motion.div
            className="hover:cursor-pointer"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "Tween", stiffness: 10 }}
            onClick={goToTeacher}
          >
            Teacher
          </motion.div>
          <motion.div
            className="hover:cursor-pointer"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "Tween", stiffness: 10 }}
            onClick={goToStudent}
          >
            Student
          </motion.div>
          <motion.div
            className="hidden tablet:flex hover:cursor-pointer"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "Tween", stiffness: 10 }}
            onClick={goToDocs}
          >
            Documentação
          </motion.div>
          <motion.div
            className="hidden tablet:flex hover:cursor-pointer"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "Tween", stiffness: 10 }}
            onClick={GoToContact}
          >
            Contato
          </motion.div>
        </div>
      </div>
    </div>
  );
}
