import { useState } from "react";
import { Text, TextDiv } from "./style";
import { Header } from "../../components/Header";
import English from "../../languages/English.json";

export const NewPage = () => {
  const [lang, setLang] = useState(English);
  return (
    <div>
      <Header setLang={setLang} lang={lang} />
        <TextDiv>
          <Text>{lang["New-Page-Text"]}</Text>
        </TextDiv>
    </div>
  );
};
