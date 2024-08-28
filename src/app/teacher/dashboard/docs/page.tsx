"use client"
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Accordion } from "react-bootstrap";
import WPComp from "@/app/student/modules/A1-A2/components/wp/WrittenPractice";

export default function TDocs() {
  return (
    <>
      <div className="flex bg-slate-100 h-screen">
        <NavBar />
        <Sidebar />
        <div className="tablet:ml-[230px] mt-[70px] w-full p-3">
          {/* <span className="flex p-3">*For the Contract Model, message us on WhatsApp</span> */}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="font-bold">
              HORIZON ENGLISH GROUP
              </Accordion.Header>
              <Accordion.Body>
                <WPComp title="Beyond the Horizon" text="What is Horizon English Group?" color="#9E2A2B" link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/DOCUMENTS%2FBEYOND_THE_HORIZON.pdf?alt=media&token=6afb724e-ef24-4075-a631-53ffb3871cc2"/>
                <br />
                <WPComp title="Horizon Guidelines" text="Guidelines for teachers and students" color="#9E2A2B" link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/DOCUMENTS%2FGUIDELINES.pdf?alt=media&token=87836a6d-0164-48b7-879e-096aef5fa87a"/>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="font-bold">
                SUPPORT MATERIAL
              </Accordion.Header>
              <Accordion.Body className="text-slate-500">
              <WPComp title="Grammar Points" text="By lesson" color="#9E2A2B" link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/DOCUMENTS%2FGRAMMAR_POINTS.pdf?alt=media&token=070e08bb-7637-4061-828f-510ad6bdc1c4"/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}