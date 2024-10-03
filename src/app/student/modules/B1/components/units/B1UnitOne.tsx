"use client";
import React from "react";
import CardComp from "@/app/student/components/Card";

export default function B1UnitOne() {
  const HeaderColor = "#84a59d";
  return (
    <>
      <CardComp
        title="Lesson 1"
        description="Holidays"
        content="Complex Sentence Structure"
        color={HeaderColor}
        revisar="true"
        link="Acessar aula"
        route="/student/modules/B1/L1"
        docs="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/B1MODULE%2FB1L1.pdf?alt=media&token=ff5d0d41-4016-4a2f-b5c5-c8a2060e05b0"
      />
      <CardComp
        title="Lesson 2"
        description="XOXO, Gossip Girl"
        content="Past Continuous Tense"
        color={HeaderColor}
        link="Acessar aula"
        revisar="true"
        route="/student/modules/B1/L2"
        docs="https://firebasestorage.googleapis.com/v0/b/horizon-db7c1.appspot.com/o/B1MODULE%2FB1L2.pdf?alt=media&token=adc1f5aa-b9f3-4d56-9a10-034b399f0e82"
      />
      <CardComp
        title="Lesson 3 - Conversation"
        description="Comprehension practice"
        content="Listening / Speaking activities"
        color={HeaderColor}
        revisar="false"
        link="Acessar aula sugerida"
        route="/student/modules/B1/L3"
        docs=""
      />
      {/* <CardComp
        title="Lesson 4"
        description="ZIP Code"
        content="Reported Speech | Prepositions"
        color={HeaderColor}
        revisar="true"
        link="Acessar aula"
        route="/student/modules/B1/L4"
        docs=""
      />
      <CardComp
        title="Lesson 5"
        description="Is there anybody?"
        content="Indefinite Pronouns"
        color={HeaderColor}
        revisar="true"
        link="Acessar aula"
        route="/student/modules/B1/L5"
        docs=""
      />
      <CardComp
        title="Lesson 6 - Conversation"
        description="Comprehension practice"
        content="Listening / Speaking activities"
        color={HeaderColor}
        link="Acessar aula sugerida"
        route="/student/modules/B1/L6"
        docs=""
      />
      <CardComp
        title="Lesson 7"
        description="Storytelling"
        content="Relative Clauses"
        color={HeaderColor}
        revisar="true"
        link="Acessar aula"
        route="/student/modules/B1/L7"
        docs=""
      />
      <CardComp
        title="Lesson 8"
        description="Hot'n'Cold"
        content="To Be Used to"
        revisar="true"
        color={HeaderColor}
        link="Acessar aula"
        route="/student/modules/B1/L8"
        docs=""
      />
      <CardComp
        title="Lesson 9 - Conversation"
        description="Comprehension practice"
        content="Listening / Speaking activities"
        color={HeaderColor}
        revisar="true"
        link="Acessar aula"
        route="/student/modules/B1/L9"
        docs=""
      />
      <CardComp
        title="Lesson 10"
        description="CONTENT RECAP"
        content="Lessons 1 - 8"
        color={HeaderColor}
        revisar="true"
        link="Acessar aula"
        route="/student/modules/B1/L10"
        docs=""
      /> */}
    </>
  );
}
;
