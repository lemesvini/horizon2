"use client";
import Image from "next/image";
import Logo from "../../../public/logofinalpreenchida.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DocsHeader() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="flex bg-white flex-row items-center justify-center h-16 text-sm z-50 border-b">
        <Image
          src={Logo}
          alt=""
          height={60}
          width={60}
          className="tablet:absolute left-2 drop-shadow hover:scale-105 hover:cursor-pointer"
          onClick={() => router.push("/docs")}
        />
        <div className="relative font-bold text-gray-400">
          <button
            className="px-4 py-2 rounded-md text-xs tablet:text-sm"
            onClick={() => toggleMenu('primeirosPassos')}
          >
            Primeiros Passos
            {openMenu === 'primeirosPassos' ? " ↑" : " ↓"}
          </button>
          <AnimatePresence>
            {openMenu === 'primeirosPassos' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute mt-2 bg-white border border-gray-200 rounded-md shadow-sm"
              >
                <a
                  href="/docs/membership"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Teachers Parceiros
                </a>
                <a
                  href="/docs/studentstable"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Cadastro de alunos
                </a>
                <a
                  href="/docs/demo"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Demonstração
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative font-bold text-gray-400">
          <button
            className="px-4 py-2 rounded-md text-xs tablet:text-sm"
            onClick={() => toggleMenu('materialDidatico')}
          >
            Material Didático
            {openMenu === 'materialDidatico' ? " ↑" : " ↓"}
          </button>
          <AnimatePresence>
            {openMenu === 'materialDidatico' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-sm"
              >
                <a
                  href="/docs/mdd#mdda1a2"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  A1-A2 Module
                </a>
                <a
                  href="/docs/mdd#mddb1"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  B1 Module
                </a>
                <a
                  // href="/docs/mdd#mddb2"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-100"
                  
                >
                  B2 Module
                </a>
                <a
                  // href="/docs/mdd#mddb2"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-100"
                  
                >
                  C1 Module
                </a>
                <a
                  href="/docs/mdd#mddConv"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Conversation
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative font-bold text-gray-400">
          <button
            className="px-4 py-2 rounded-md text-xs tablet:text-sm"
            onClick={() => toggleMenu('paraOAluno')}
          >
            Para o aluno
            {openMenu === 'paraOAluno' ? " ↑" : " ↓"}
          </button>
          <AnimatePresence>
            {openMenu === 'paraOAluno' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-sm"
              >
                <a
                  href="/docs/studentsaccess"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Acesso do aluno
                </a>
                <a
                  href="/docs/ebook"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  E-book
                </a>
                <a
                  href="/docs/wp"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Written Practice
                </a>
                <a
                  href="/docs/speakingbuddies"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Speaking Buddies
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
