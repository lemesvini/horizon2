"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderLogo from "../../../public/horizonheaderlogoBLUE.png";
import { useRouter } from "next/navigation";

export default function LPHeader() {
  const router = useRouter();

  function goToStudent() {
    router.push("/login/student")
  }
  function goToTeacher() {
    router.push("/login/teacher")
  }
  return (
    <div className="bg-white drop-shadow flex h-20 items-center justify-center w-full gap-2">
      <div className="flex gap-8 text-slate-500">
        {/* <motion.div
          className="hover:cursor-pointer"
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: "Tween", stiffness: 10 }}
        >
          Sobre
        </motion.div> */}
        <motion.div
          className="hover:cursor-pointer pl-2"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "Tween", stiffness: 10 }}
          onClick={goToTeacher}
        >
          Teacher
        </motion.div>
      </div>
      <motion.div
        className=" hover:cursor-pointer mx-2 "
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "Tween" }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image src={HeaderLogo} alt="" width={260} height={100}></Image>
      </motion.div>
      <div className="flex gap-8 text-slate-500">
        {/* <motion.div
          className="hover:cursor-pointer"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "Tween", stiffness: 10 }}
        >
          Teachers
        </motion.div> */}
        <motion.div
          className="hover:cursor-pointer pr-2"
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "Tween", stiffness: 10 }}
          onClick={goToStudent}
        >
          Student
        </motion.div>
      </div>
    </div>
  );
}
