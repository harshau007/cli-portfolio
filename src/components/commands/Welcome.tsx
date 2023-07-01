import {
  Cmd,
  HeroContainer,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`                                                             
   7MMF    7MMF                            7MM        
    MM      MM                              MM        
    MM      MM   ,6"Yb.   7Mb,od8 ,pP"Ybd   MMpMMMb.  
    MMmmmmmmMM  8)   MM    MM' "' 8I    "   MM    MM  
    MM      MM   ,pm9MM    MM      YMMMa.   MM    MM  
    MM      MM  8M   MM    MM     L.   I8   MM    MM  
  .JMML.  .JMML. Moo9^Yo..JMML.   M9mmmP' .JMML  JMML.
  `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
        7MMF    7MMF      
          MM      MM        
     MM      MM   
   MMmmmmmmMM 
   MM      MM 
   MM      MM 
  .JMML.  .JMML. 
            `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
