import { Header } from "../../components/Header";
import { Home, Content, IconMain, Main, MainContent } from "./style";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { TextTitle } from "../../components/TextTitle";

export const Social = () => {
  return (
    <>
      <Header />
      <Home>
        <Content>
          <TextTitle text="Social Media"></TextTitle>
          <Main>
            <MainContent>
              <IconMain
                href="https://github.com/EduardoNoronha31"
                target="_blank"
              >
                <AiOutlineGithub className="icon" />
              </IconMain>
              <a
                href="https://github.com/EduardoNoronha31"
                target="_blank"
                rel="noreferrer"
                className="LinkMain"
              >
                GitHub
              </a>
            </MainContent>
            <MainContent>
              <IconMain
                href="https://www.linkedin.com/in/eduardo-noronha-093735219/"
                target="_blank"
              >
                <AiFillLinkedin className="icon" />
              </IconMain>
              <a
                href="https://www.linkedin.com/in/eduardo-noronha-093735219/"
                target="_blank"
                rel="noreferrer"
                className="LinkMain"
              >
                LinkedIn
              </a>
            </MainContent>
            <MainContent>
              <IconMain
                href="https://www.instagram.com/eduardo.noronha31/"
                target="_blank"
              >
                <AiOutlineInstagram className="icon" />
              </IconMain>
              <a
                href="https://www.instagram.com/eduardo.noronha31/"
                target="_blank"
                rel="noreferrer"
                className="LinkMain"
              >
                Instagram
              </a>
            </MainContent>
          </Main>
        </Content>
      </Home>
    </>
  );
};
