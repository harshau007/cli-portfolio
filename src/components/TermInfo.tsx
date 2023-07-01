import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>user</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
