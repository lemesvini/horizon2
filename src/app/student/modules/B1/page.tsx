"use client";
import Image from "next/image";
import React, { useState } from "react";
import B1NavBar from "./components/B1Header";
import MainContent from "./components/MainContent";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = auth.currentUser;
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState("Item1");

  if (user) {
    return (
      <>
        <div>
          <B1NavBar />
          <MainContent selectedPage={selectedPage} />
          {/* <Sidebar setSelectedPage={setSelectedPage} /> */}
        </div>
      </>
    );
  } else {
    router.push("/login");
  }
}
