import { Header } from "../../components/Header";
import { IntroductionText } from "../../components/IntroductionText";
import { TextLi } from "../../components/TextLi";
import { TextTitle } from "../../components/TextTitle";
import { Home, HomeContent, Main } from "./style";

export const HomePage = () => {
  return (
    <HomeContent>
      <Header />
      <Home>
        <Main>
          <TextTitle text="Be Pragmatic" />
          <TextLi
            text="Hello there, my name is Eduardo Noronha, I'm 18 years old and I'm a software engineering
          student and Junior Front End Developer. My work technologies are:"
            additionalText1="Front-End: Javascript ES6+, Typescript, HTML5, CSS3, React JS, Bootstrap, Material UI and
          Styled Components."
            additionalText2="Back-End: NodeJS, Express, MySQL, MongoDB and Sequelize."
          />
          <IntroductionText
            text='I take great pleasure in learning, I see my challenges as an important opportunity
          to improve my knowledge, I love working as a team trying to help in the best way possible. The name of this
          site refers to a fantastic movie called "Untouchables", it was through it that I came to know the word
          "Pragmatic", I loved the meaning it has, I think it defines in many parts the way I am. To be pragmatic
          is to be practical, to have defined goals.'
          />
        </Main>
      </Home>
    </HomeContent>
  );
};
