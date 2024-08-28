"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { auth, db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import Accordion from "react-bootstrap/Accordion";

export default function TDashboard() {
  const user = auth.currentUser;
  const userName = user?.displayName;
  const router = useRouter();

  const [studentData, setStudentData] = useState({
    numberOfStudents: 0,
    totalAmountPerWeek: 0,
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        if (!user?.email) {
          throw new Error("User is not authenticated");
        }

        const studentsCollectionRef = collection(
          db,
          "students",
          "user",
          user.email
        );
        const studentDocs = await getDocs(studentsCollectionRef);
        const students = studentDocs.docs.map((doc) => doc.data());

        const numberOfStudents = students.length;

        let totalAmountPerWeek = 0;

        students.forEach((student) => {
          const hourPrice = parseFloat(student.hourPrice || "0");
          const classesPerWeek = parseFloat(student.weekClasses || 0);
          totalAmountPerWeek += hourPrice * classesPerWeek * 4;
          console.log(classesPerWeek, hourPrice, totalAmountPerWeek);
        });

        setStudentData({
          numberOfStudents,
          totalAmountPerWeek,
        });
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };

    fetchStudents();
  }, [user]);

  if (user) {
    return (
      <>
        <div className="flex bg-slate-100 h-[100dvh] w-full">
          <NavBar />
          <Sidebar />
          <div className="tablet:ml-[230px] mt-[70px] w-full p-3">
            <div className="flex flex-col tablet:flex-row items-center p-2 justify-center tablet:justify-between w-full">
              <span className="text-xl text-[#0A3153] font-semibold p-3">
                Welcome, {userName}!
              </span>
              <div className="flex flex-col gap-y-3 tablet:flex-row justify-center items-center gap-x-3">
                <div className="w-full tablet:w-fit flex items-center h-20 rounded-xl bg-[#9E2A2B] text-white p-3 drop-shadow">
                  <span className="text-center justify-center align-middle w-full">
                    Active Students:{" "} 
                    <strong className="text-xl">
                      {studentData.numberOfStudents}
                    </strong>
                  </span>
                </div>
                <div className="w-full tablet:w-fit flex items-center h-20 rounded-xl bg-[#9E2A2B] text-white p-3 drop-shadow">
                  <span className="text-center justify-center align-middle w-full">
                    Predicted for the month:{" "} 
                    <strong className="text-xl">
                      R${studentData.totalAmountPerWeek.toFixed(2)}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <br />
            <div className="flex flex-col px-3 gap-3">
              <span className="font-semibold">Horizon News:</span>
              <div className="w-full h-fit rounded-lg">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="flex w-full pr-4 justify-between items-center">
                        <span>
                          Encontro Pedagógico -{" "}
                          <strong>CAPTAÇÃO DE ALUNOS!</strong>
                        </span>
                        <span className="border-2 border-slate-300  px-3 py-2 rounded-lg font-bold text-slate-500">
                          13/09
                        </span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      Buscando novos alunos? Quer preencher sua agenda?
                      Participe do Encontro Pedagógico do dia 13/09/2024 para
                      debatermos juntos as melhores formas de captação de
                      alunos. Vamos falar de como podemos usar as redes para
                      chamar atenção de futuros alunos e como os feedbacks dos
                      seus alunos ativos mantém a captação acontecendo nas
                      entrelinhas das suas aulas!
                      <br />
                      <br />
                      Confirme sua presença pelo WhatsApp :)
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="flex w-full pr-4 justify-between items-center">
                        <span>Lançamento da Horizon 2.0!</span>
                        <span className="border-2 border-slate-300  px-3 py-2 rounded-lg font-bold text-slate-500">
                          01/09
                        </span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      O novo Teacher's Dashboard veio com funcionalidades que
                      vão mudar o seu Workflow de forma inovadora. Lembre-se:
                      we're in this together! Não se esqueça de entrar no grupo
                      do WhatsApp e participar dos encontros pedagógicos :)
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    router.push("/login");
  }
}
