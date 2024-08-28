"use client";
import React from "react";
import CardComp from "../../../../components/Card";

function UnitOne() {
  return (
    <>
      <CardComp
        title="Lesson 1"
        description="Welcome! Let's learn the basics"
        content="Articles / Verb to Be"
        color="#335C67"
        link="Acessar aula"
        route="/student/modules/A1-A2/L1"
        DocsRoute=""
      />
      <CardComp
        title="Lesson 2"
        description="Personal Information"
        content="The Auxiliaries"
        color="#335C67"
        link="Acessar aula"
        route="/student/modules/A1-A2/L2"
        DocsRoute=""
      />
      <CardComp
        title="Lesson 3"
        description="Routines are important!"
        content="Simple Present Tense"
        color="#335C67"
        link="Acessar aula"
        route="/student/modules/A1-A2/L3"
        DocsRoute=""
      />
      <CardComp
        title="Lesson 4"
        description="Food and Drinks"
        content="3rd Person Rule"
        color="#335C67"
        link="Acessar aula"
        route="/student/modules/A1-A2/L4"
        DocsRoute=""
      />
      <CardComp
        title="Lesson 5"
        description="Fashion and Clothing"
        content="Object Pronouns"
        color="#335C67"
        link="Acessar aula"
        route="/student/modules/A1-A2/L5"
        DocsRoute=""
      />
      <CardComp
        title="Lesson 6"
        description="UNIT REVIEW"
        content="Lessons 1 - 5"
        color="#335C67"
        link="Acessar aula"
        route="/student/modules/A1-A2/L6"
        DocsRoute=""
      />
    </>
  );
}

export default UnitOne;
