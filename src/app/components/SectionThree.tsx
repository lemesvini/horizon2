"use client";
import Image from "next/image";
import PC from "../../../public/Group 1.svg"; // Ensure this is the correct path
import PC1 from "../../../public/Group 2dash.svg"
import PC2 from "../../../public/Group 3stds.svg"
import PC3 from "../../../public/Group 1cr.svg"
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function SectionThree() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col bg-white w-full items-center justify-center p-1 tablet:p-12"
    >
      {/* <span className="text-white font-bold text-3xl pt-6">Teacher{"'"}s Dashboard</span> */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-full flex "
      >
        <Carousel.Item>
          <div className="relative w-full h-full p-10 flex flex-col items-center justify-center">
            <span className="font-bold text-2xl bg-blue-500 text-white p-3 rounded-lg mb-4">Teacher{"'"}s Dashboard</span>
            <Image src={PC1} alt="First slide" width={600} height={600} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative w-full h-full p-10 flex flex-col items-center justify-center">
            <span className="font-bold text-2xl bg-blue-500 text-white p-3 rounded-lg mb-4">Teacher{"'"}s Dashboard - Students Table</span>
            <Image src={PC2} alt="First slide" width={600} height={600} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative w-full h-full p-10 flex flex-col items-center justify-center">
            <span className="font-bold text-2xl bg-blue-500 text-white p-3 rounded-lg mb-4">Teacher{"'"}s Dashboard - Class Records</span>
            <Image src={PC3} alt="First slide" width={600} height={600} />
          </div>
        </Carousel.Item>
      </Carousel>
    </motion.div>
  );
}