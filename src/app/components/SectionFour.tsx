"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

function StepCard(props: any) {
  return (
    <div className="w-80 h-96 bg-white flex flex-col rounded-xl drop-shadow-lg">
      <div className="w-full border-b-2 h-24 p-2 items-center justify-center flex">
        <span className="text-4xl font-bold text-blue-500">{props.title}</span>
      </div>
      <div className="flex p-6 text-lg leading-loose text-justify">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default function SectionTwo() {
  return (
    <>
      <motion.div
        className="bg-slate-100 pt-12 tablet:pt-0 h-fit pb-3 tablet:h-[70dvh] flex flex-col tablet:flex-row justify-center items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2}}>
          <StepCard
            title="1. Zero Class"
            description="Talk to your new student and decide what module suits them best. Decide what time the classes are going to take place and how many times a week."
          />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5}}>
          <StepCard
            title="2. Add Student"
            description="Go to the Students tab on the Teacher's Dashboard and click on Add Student, include the Student's Details and save. "
          />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1}}>
          <StepCard
            title="3. First Login"
            description="Make sure to use the student's Gmail address when filling in the Student's Details and tell them to login using their Gmail Account."
          />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5}}>
          <StepCard
            title="Done!"
            description="You're ready to start your classes! You can edit the Student's Details at any time to go to grant them access to a new module or change their email account."
          />
        </motion.div>
      </motion.div>
    </>
  );
}
