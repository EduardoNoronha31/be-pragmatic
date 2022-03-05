import { useState } from "react";
import { Header } from "../../components/Header";
import { MainText } from "../../components/MainText";
import { LiText } from "../../components/TextLi";
import { TextTitle } from "../../components/TextTitle";
import { Home, HomeContent, Main } from "./style";
import English from "../../languages/English.json";

export const HomePage = () => {
  const [lang, setLang] = useState(English);
  return (
    <HomeContent>
      <Header setLang={setLang} lang={lang} />
      <Home>
        <Main>
          <TextTitle text="Be Pragmatic" />
          <LiText
            text={lang["Li-Text-Text"]}
            additionalText1={lang["Li-Text-AdditionalText1"]}
            additionalText2={lang["Li-Text-AdditionalText2"]}
          />
          <MainText text={lang["Main-Text-Text-1"]} />
          <MainText text={lang["Main-Text-Text-2"]} />
        </Main>
      </Home>
    </HomeContent>
  );
};
