"use client";
import React from "react";
import CardComp from "../../../components/Card";
import ModalComp from "../../../../../components/Modal";
import B1UnitOne from "./units/B1UnitOne";
import B1UnitTwo from "./units/B1UnitTwo";
import B1UnitThree from "./units/B1UnitThree";

const One = (
  <div className="w-full mt-24 laptop:mt-14">
    <div className="p-4 flex flex-row flex-wrap gap-4">
      <p className="text-2xl font-semibold pt-2">Unit One</p>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        <B1UnitOne />
      </div>
      <p className="text-2xl font-semibold pt-2">Unit Two</p>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {/* <B1UnitTwo /> */}
      </div>
      <p className="text-2xl font-semibold pt-2">Unit Three</p>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {/* <B1UnitThree /> */}
      </div>
    </div>
  </div>
);
const Two = ("");
const Three = ("");

const MainContent = ({ selectedPage }: { selectedPage: string }) => {
  return (
    <div className="z-1 flex justify-center laptop:ml-64">
      {selectedPage === "Item1" && One}
      {selectedPage === "Item2" && Two}
      {selectedPage === "Item3" && Three}
    </div>
  );
};

export default MainContent;
