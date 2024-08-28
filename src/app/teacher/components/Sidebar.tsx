"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  faCircleUser,
  faFileCircleCheck,
  faFilePen,
  faFolderOpen,
  faGaugeHigh,
  faGraduationCap,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "@/firebase";

export default function Sidebar(props: any) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/teacher/dashboard", icon: faGaugeHigh, label: "Dashboard" },
    {
      href: "/teacher/dashboard/students",
      icon: faGraduationCap,
      label: "Students",
    },
    {
      href: "/teacher/dashboard/records",
      icon: faFilePen,
      label: "Class Records",
    },
    {
      href: "/teacher/dashboard/A1-A2",
      icon: faSwatchbook,
      label: "Module A1-A2",
    },
    { href: "/teacher/dashboard/B1", icon: faSwatchbook, label: "Module B1" },
    {
      href: "/teacher/dashboard/conv",
      icon: faSwatchbook,
      label: "Module Conversation",
    },
    {
      href: "/teacher/dashboard/WrittenPractices",
      icon: faFileCircleCheck,
      label: "Written Practices",
    },
    { href: "/teacher/dashboard/docs", icon: faFolderOpen, label: "Documents" },
    // { href: "/teacher/dashboard/plans", icon: faFolderOpen, label: "Plans" },
  ];

  const defaultActive = "/";
  const userName = auth.currentUser?.displayName;
  const userImg = auth.currentUser?.photoURL;

  return (
    <div className="hidden tablet:flex flex-col fixed mt-[70px] h-[calc(100dvh-70px)] bg-[#0A3153] text-white drop-shadow w-[230px] p-2">
      <div className="w-full flex flex-col p-2 justify-center items-center">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="relative mb-[-15px]">
            {userImg ? (
              <img
                src={userImg}
                alt="User profile"
                className="w-16 h-16 bg-white p-1 rounded-full"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCircleUser}
                className="text-4xl p-3 text-[#0A3153]"
              />
            )}
          </span>
          <span className="bg-white text-[#0A3153] text-xl rounded-xl font-bold p-3 w-full text-center">
            Hi, {userName}
          </span>
        </div>
      </div>
      <hr className="p-2 mt-2"/>
      <div>
        {menuItems.map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-row text-xm items-center gap-2 cursor-pointer p-2 rounded-lg ${
              pathname === href || (pathname === "/" && href === defaultActive)
                ? "bg-white text-[#0A3153] no-underline"
                : "text-white no-underline"
            }`}
          >
            <FontAwesomeIcon icon={icon} className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
