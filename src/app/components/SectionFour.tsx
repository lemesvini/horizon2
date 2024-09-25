"use client";
import { motion } from "framer-motion";

function StepCard(props: any) {
  return (
    <div className="w-80 h-80 bg-white flex flex-col rounded-2xl drop-shadow-lg">
      <div className="w-full h-24 p-4 flex items-center justify-start border-b border-gray-300">
        <span className="text-2xl font-semibold text-gray-900">
          {props.title}
        </span>
      </div>
      <div className="flex p-6 text-lg text-gray-700 leading-relaxed">
        <p>{props.description}</p>
      </div>
      {/* <div className="flex justify-end p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
          Action
        </button>
      </div> */}
    </div>
  );
}

export default function SectionTwo() {
  return (
    <>
      <motion.div
        className="bg-slate-100 tablet:pt-0 m-3 pb-3 tablet:h-[70dvh] flex flex-col justify-center items-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="font-bold text-xl tablet:text-2xl p-4 mt-12 text-slate-600">
          New Student step-by-step:
        </span>
        <div className="flex flex-col mb-12 tablet:flex-row justify-center items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <StepCard
              title="1. Zero Class"
              description="Talk to your new student and decide what module suits them best. Decide what time the classes are going to take place and how many times a week."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <StepCard
              title="2. Add Student"
              description="Go to the Students tab on the Teacher's Dashboard and click on Add Student, include the Student's Details and save. "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <StepCard
              title="3. First Login"
              description="Make sure to use the student's Gmail address when filling in the Student's Details and tell them to login using their Gmail Account."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
