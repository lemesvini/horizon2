"use client";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";

export default function TmConv() {
  return (
    <>
      <div className="flex bg-slate-100 h-screen">
        <NavBar />
        <Sidebar />
        <div className="tablet:ml-[230px] mt-[70px] w-full p-3">
          <span className="text-slate-500">
            Ooops... Esta página está em manuntenção :( 
          </span>
        </div>
      </div>
    </>
  );
}
