"use client";
import { motion, Variants } from "framer-motion";
import LPHeader from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import Footer from "./components/Footer";

const sectionVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Home() {
  return (
    <>
      <LPHeader />
      <SectionOne />
      <motion.div
        // initial="offscreen"
        // whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        // variants={sectionVariants}
        className="bg-white"
      >
        <SectionTwo />
      </motion.div>

      <motion.div
        // initial="offscreen"
        // whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        // variants={sectionVariants}
      >
        <SectionFive />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={sectionVariants}
      >
        <SectionThree />
      </motion.div>

      <motion.div
        // initial="offscreen"
        // whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        // variants={sectionVariants}
      >
        <SectionFour />
      </motion.div>
      <div className="">
      <Footer />
      </div>
      
    </>
  );
}
