import _ from "lodash";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectTitle,
  UsageDiv,
} from "../styles/Projects.styled";

const Projects: React.FC<{
  arg: string[];
  history: string[];
  rerender: boolean;
}> = ({ arg, history, rerender }) => {
  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command is redirect ===== */
  if (
    arg.length > 0 && // contains arg
    arg[0] === "go" && // first arg is 'go'
    rerender && // is submitted
    currentCommand[0] === "projects" && // current command starts with 'projects'
    currentCommand.length > 1 && // current command has arg
    _.includes([1, 2, 3, 4], parseInt(currentCommand[2])) // arg last part is one of project id
  ) {
    projects.forEach(({ id, url }) => {
      id === parseInt(arg[1]) && window.open(url, "_blank");
    });
    return null;
  }

  /* ===== check arg is valid ===== */
  const checkArg = (a: string) => {
    if (a !== "go")
      return (
        <UsageDiv noMargin>
          Usage: projects go &#60;project-no&#62; <br />
          eg: projects go 1
        </UsageDiv>
      );
    return null;
  };

  return arg.length > 0 ? (
    checkArg(arg[0])
  ) : (
    <div>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <UsageDiv>
        Usage: projects go &#60;project-no&#62; <br />
        eg: projects go 1
      </UsageDiv>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Sat Naing's Blog",
    desc: "My personal blog where I can write down my thoughts and experiences.",
    url: "https://satnaing.dev/blog/",
  },
  {
    id: 2,
    title: "Haru Fashion",
    desc: "An ecommerce web application where users can browse various products and make purchases.",
    url: "https://haru-fashion.vercel.app/",
  },
  {
    id: 3,
    title: "Haru API",
    desc: "A RESTful API developed for the Haru fashion ecommerce project.",
    url: "https://satnaing.github.io/haru-api/",
  },
  {
    id: 4,
    title: "Tip Calculator",
    desc: "A Progressive Web App (PWA) that can calculate the tip amount.",
    url: "https://splitter-sn.netlify.app/",
  },
];

export default Projects;