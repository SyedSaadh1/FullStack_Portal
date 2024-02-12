import React from "react";

export type SkillsProps = {
  skill: string,
  description: string
}

export default function PersonalSkill(props: SkillsProps) {
  return <div>
    <h1 className="text-2xl bg-red-500"> Personal Skills : {props.skill} , {props.description}</h1>
    <p className="mt-5 font-bold underline underline-offset-1 m-2"> Skills</p>


    <ul>
      <li className="ps-5 mt-2 space-y-1 list-disc list-inside">
        <b>AI/ML Technologies:</b> Proficient in ML, Deep Learning,
        TensorFlow, Python, and NLP.
      </li>
      <li className="ps-5 mt-2 space-y-1 list-disc list-inside">
        <b>Programming:</b> Strong skills in Python, JavaScript, HTML, CSS,
        and React.
      </li>
      <li className="ps-5 mt-2 space-y-1 list-disc list-inside">
        <b>Web Development:</b> Experienced in building user-friendly
        interfaces.
      </li>
      <li className="ps-5 mt-2 space-y-1 list-disc list-inside">
        <b>API Development:</b> Hands-on experience with ChatGPT, related
        APIs, and RESTful services.
      </li>
      <li className="ps-5 mt-2 space-y-1 list-disc list-inside">
        <b>Database Technologies:</b> Knowledge in MySql, NoSQL, RDBMS design,
        and optimizations.
      </li>
      <li className="ps-5 mt-2 space-y-1 list-disc list-inside">
        <b>Design Principles:</b> Familiar with object-oriented and functional
        design, and best-practice patterns.
      </li>
    </ul>
  </div>
}