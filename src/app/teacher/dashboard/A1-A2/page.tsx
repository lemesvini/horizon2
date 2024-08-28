"use client";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import UnitOne from "@/app/student/modules/A1-A2/components/units/UnitOne";
import UnitTwo from "@/app/student/modules/A1-A2/components/units/UnitTwo";
import UnitThree from "@/app/student/modules/A1-A2/components/units/UnitThree";

export default function TmA1A2() {
  return (
    <>
      <div className="flex bg-slate-100">
        <NavBar />
        <Sidebar />
        <div className="tablet:ml-[230px] mt-[70px] w-full p-3">
          <div className="p-4 flex flex-row flex-wrap gap-4">
            <p className="text-2xl font-semibold pt-2">Unit One</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              <UnitOne />
            </div>
            <p className="text-2xl font-semibold pt-2">Unit Two</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              <UnitTwo />
            </div>
            <p className="text-2xl font-semibold pt-2">Unit Three</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              <UnitThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
