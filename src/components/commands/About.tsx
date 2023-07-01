import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Harsh Upadhyay</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Student</HighlightAlt> based in Mumbai,
        India.
      </p>
      <p>
        I am passionate about writing codes and <br />
        learning devops and backend engineering concepts to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
