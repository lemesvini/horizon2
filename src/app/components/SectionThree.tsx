"use client"
import Image from "next/image";
import PC from "../../../public/s3pcs.png";
import { motion } from "framer-motion";

export default function SectionThree() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col bg-white h-80 tablet:h-screen w-full items-center justify-center p-1 tablet:p-12"
    >
      <span className="text-4xl mt-12 font-bold text-[#0A3053]">
        Teacher{"'"}s Dashboard
      </span>
      <div className="relative w-full h-full">
        <Image
          src={PC}
          alt=""
          layout="fill"
          objectFit="contain"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>
    </motion.div>
  );
}
