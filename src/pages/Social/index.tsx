import { Header } from "../../components/Header";
import { Home, Content, IconMain, Main, MainContent } from "./style";
import English from "../../languages/English.json";
import { useState } from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TextTitle } from "../../components/TextTitle";

export const Social = () => {
  const [lang, setLang] = useState(English);
  return (
    <>
      <Header setLang={setLang} lang={lang} />
      <Home>
        <Content>
          <TextTitle text={lang["Social-Text"]}></TextTitle>
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
            <MainContent>
              <IconMain
                href="https://api.whatsapp.com/send?phone=5548999025642&text=Ol%C3%A1%20Eduardo%2C%20tudo%20certo%3F"
                target="_blank"
              >
                <AiOutlineWhatsApp className="icon" />
              </IconMain>
              <a
                href="https://api.whatsapp.com/send?phone=5548999025642&text=Ol%C3%A1%20Eduardo%2C%20tudo%20certo%3F"
                target="_blank"
                rel="noreferrer"
                className="LinkMain"
              >
                WhatsApp
              </a>
            </MainContent>
          </Main>
        </Content>
      </Home>
    </>
  );
};
