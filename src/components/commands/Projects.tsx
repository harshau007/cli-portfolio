import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "TCET-Linux",
    desc: "TCET Linux is an open-source operating system providing basic services, and various software packages that make up the user-space applications, utilities and it is highly customized. Our goal in creating this operating system is to provide a platform that combines robust functionality with a user-friendly experience. Built from the ground up, TCET Linux boasts efficient performance, customization options, and a range of features tailored to meet the needs of both casual users and enthusiasts.",
    url: "https://github.com/tcet-opensource/tcet-linux",
  },
  {
    id: 2,
    title: "TCET-Linux Welcome Application",
    desc: "TCET Linux Welcome is a simple welcome app specifically written for TCET Linux but it can be used on Arch Linux and any Arch-based distributions.",
    url: "https://github.com/tcet-opensource/tcet-linux-welcome",
  },
];

export default Projects;
