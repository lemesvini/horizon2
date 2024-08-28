"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Sidebar from "./components/SidebarA1A2";
import MainContent from "./components/MainContent";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = auth.currentUser;
  const router = useRouter()
  const [selectedPage, setSelectedPage] = useState("Item1");

  if (user) {
    return (
      <>
        <div>
          <NavBar />
          <MainContent selectedPage={selectedPage} />
          <Sidebar setSelectedPage={setSelectedPage} />
        </div>
      </>
    );
  } else {
    router.push("/login");
  }
}
