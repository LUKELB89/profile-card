import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const mySkills = [
  {
    color: "#F39C12",
    skill: "HTML + CSS",
    level: "intermediate"
  },
  {
    color: "#FCF141",
    skill: "JavaScript",
    level: "advanced"
  },
  {
    color: "#8ED913",
    skill: "EJS",
    level: "intermediate"
  },
  {
    color: "#03D3F0",
    skill: "React",
    level: "beginner"
  },
  {
    color: "#1E8449",
    skill: "MongoDB",
    level: "intermediate"
  }
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="/images/gitHubProfilePic.jpg" alt="GitHub Profile Pic" />
  )
}

function Intro() {
  return (
    <div>
      <h1>Luke Bravenboer</h1>
      <p>Web development student, currently working as an English teacher and Sales Consultant, but soon to be working as an independent web and mobile developer</p>
    </div>
  )
}

function SkillList() {
  const skills = mySkills;

  return (
    <div className="skill-list">
      {skills.map((skill) =>
        <Skill skillObject={skill} key={skill.skill} />
      )}
    </div>
  )
}

function Skill({ skillObject }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObject.color }}>
      <span>{skillObject.skill}</span>
      <span>
        {skillObject.level === "advanced" && "💪🏻"}
        {skillObject.level === "intermediate" && "👍🏻"}
        {skillObject.level === "beginner" && "👶🏻"}
      </span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
