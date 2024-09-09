"use client";
import { motion } from "framer-motion";

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
        className="bg-slate-100 tablet:pt-0 m-3 pb-3 tablet:h-[70dvh] flex flex-col justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="font-bold text-xl tablet:text-2xl p-4 mt-12 text-slate-600">New Student step-by-step:</span>
        <div className="flex flex-col mb-12 tablet:flex-row justify-center items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <StepCard
              title="1. Zero Class"
              description="Talk to your new student and decide what module suits them best. Decide what time the classes are going to take place and how many times a week."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <StepCard
              title="2. Add Student"
              description="Go to the Students tab on the Teacher's Dashboard and click on Add Student, include the Student's Details and save. "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <StepCard
              title="3. First Login"
              description="Make sure to use the student's Gmail address when filling in the Student's Details and tell them to login using their Gmail Account."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <StepCard
              title="Done!"
              description="You're ready to start your classes! You can edit the Student's Details at any time to grant them access to a new module or change their email account."
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
