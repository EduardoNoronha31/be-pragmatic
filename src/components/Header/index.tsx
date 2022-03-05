import {
  HeaderContent,
  Logo,
  HeaderLink,
  Links,
  SwitchDiv,
  SwitchText,
  Bars,
  BarsDiv,
} from "./style";
import { Link } from "react-router-dom";
import LogoPng from "../../assets/logoBePragmatic.png";
import Switch from "react-switch";
import { shade } from "polished";
import English from "../../languages/English.json";
import Portuguese from "../../languages/Portuguese.json";
import { useState } from "react";

type HeaderProps = {
  setLang?: any;
  lang?: any;
};

export const Header = (props: HeaderProps) => {
  function changeLang(event: any) {
    if (event) {
      return Portuguese;
    } else {
      return English;
    }
  }

  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <HeaderContent>
      <Link to="/">
        <Logo src={LogoPng} alt="Be Pragmatic Logo" />
      </Link>
      <Links id={showNavMenu ? "hidden" : ""}>
        <HeaderLink>
          <Link to="/" className="Link-Li">
            Home
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/social" className="Link-Li">
            Social
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/projects" className="Link-Li">
            Projects
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/blog" className="Link-Li">
            Blog
          </Link>
        </HeaderLink>
      </Links>
      <SwitchDiv>
        <SwitchText>Translate</SwitchText>
        <Switch
          onChange={(event) => {
            props.setLang(changeLang(event));
          }}
          checked={props.lang === Portuguese}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.2, "#027373")}
          onColor="#172026"
        />
      </SwitchDiv>
      <BarsDiv>
        <Bars onClick={() => setShowNavMenu(!showNavMenu)}/>
      </BarsDiv>
    </HeaderContent>
  );
};
