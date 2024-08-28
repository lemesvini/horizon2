"use client";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import { Accordion } from "react-bootstrap";
import WPComp from "@/app/student/modules/A1-A2/components/wp/WrittenPractice";

export default function TWp() {
  return (
    <>
      <div className="flex bg-slate-100 h-screen">
        <NavBar />
        <Sidebar />
        <div className="tablet:ml-[230px] mt-[70px] w-full p-3">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="font-bold">
              (MODULE) A1-A2
              </Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <WPComp
                    title="LESSON 01"
                    text="Welcome! Let´s learn the basics"
                    color="#335C67"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L1.pdf?alt=media&token=cf39453c-5761-4265-972e-ed355d5503a0"
                  />
                  <br />
                  <WPComp
                    title="LESSON 02"
                    text="Personal Information"
                    color="#335C67"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L2.pdf?alt=media&token=dd6ccaaa-b951-4161-a2ee-879c05cb1409"
                  />
                  <br />
                  <WPComp
                    title="LESSON 03"
                    text="Routines are important!"
                    color="#335C67"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L3.pdf?alt=media&token=7befedbc-9e75-4a6f-a3ff-6c23fea70fbc"
                  />
                  <br />
                  <WPComp
                    title="LESSON O4"
                    text="Food and drinks"
                    color="#335C67"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L4.pdf?alt=media&token=3b826a5f-ee2d-4c5a-8555-375cc5b6ac4a"
                  />
                  <br />
                  <WPComp
                    title="LESSON 05"
                    text="Fashion and clothing"
                    color="#335C67"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L5.pdf?alt=media&token=c3a1b6de-2e75-4693-89d0-2307c5b3370e"
                  />
                  <br />
                  <WPComp
                    title="LESSON 06"
                    text="UNIT REVIEW"
                    color="#335C67"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L6.pdf?alt=media&token=bb90d0ce-7bf5-49ce-91f8-6e3ec17b30a9"
                  />
                  <br />
                  <WPComp
                    title="LESSON 07"
                    text="Places and directions"
                    color="#99C286"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L7.pdf?alt=media&token=08794d0a-7ca6-468c-9f26-8b156e417686"
                  />
                  <br />
                  <WPComp
                    title="LESSON 08"
                    text="Numbers and time"
                    color="#99C286"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L9.pdf?alt=media&token=0890724e-b0b6-4812-8211-609b4cf8ea77"
                  />
                  <br />
                  <WPComp
                    title="LESSON 09"
                    text="Describing people"
                    color="#99C286"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L9.pdf?alt=media&token=0890724e-b0b6-4812-8211-609b4cf8ea77"
                  />
                  <br />
                  <WPComp
                    title="LESSON 10"
                    text="Hobbies and activities"
                    color="#99C286"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L10.pdf?alt=media&token=958617ae-a8a6-4470-8417-36ca256fc963"
                  />
                  <br />
                  <WPComp
                    title="LESSON 11"
                    text="Travel and transportation"
                    color="#99C286"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L11.pdf?alt=media&token=4d2a1894-488e-47b9-8a59-98f6848a2d63"
                  />
                  <br />
                  <WPComp
                    title="LESSON 12"
                    text="UNIT REVIEW"
                    color="#99C286"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L12.pdf?alt=media&token=9ce4db08-274f-4dd7-aec9-ebe5b29f42b0"
                  />
                  <br />
                  <WPComp
                    title="LESSON 13"
                    text="Health and feelings"
                    color="#E26D5C"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L13.pdf?alt=media&token=9f2837d3-bd61-4442-b80c-be98d2f29495"
                  />
                  <br />
                  <WPComp
                    title="LESSON 14"
                    text="Shopping and money"
                    color="#E26D5C"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L14.pdf?alt=media&token=e893f4fb-e3cd-4bea-85f8-1b64cfb182ae"
                  />
                  <br />
                  <WPComp
                    title="LESSON 15"
                    text="Everything is possible"
                    color="#E26D5C"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L15.pdf?alt=media&token=0abb244d-d12d-4c7b-914a-67dea08bcfe0"
                  />
                  <br />
                  <WPComp
                    title="LESSON 16"
                    text="Whose is that?"
                    color="#E26D5C"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L16.pdf?alt=media&token=485a502d-b8da-41b9-9b62-a423f897ec93"
                  />
                  <br />
                  <WPComp
                    title="LESSON 17"
                    text="Fortune teller"
                    color="#E26D5C"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L17.pdf?alt=media&token=507649a5-6101-4add-87a9-d2cc2d764424"
                  />
                  <br />
                  <WPComp
                    title="LESSON 18"
                    text="UNIT REVIEW"
                    color="#E26D5C"
                    link="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/A1A2%2FWP-A1A2L18.pdf?alt=media&token=4789db37-2652-410a-9a47-27ad81b636b1"
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="font-bold">
              (MODULE) B1
              </Accordion.Header>
              <Accordion.Body className="italic text-slate-500">
                Algo deu errado.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="font-bold">
                (MODULE) Conversation
              </Accordion.Header>
              <Accordion.Body className="italic text-slate-500">
                Algo deu errado.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}
