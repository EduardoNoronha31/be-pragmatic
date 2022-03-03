import { HeaderContent, Logo, HeaderLink, Links } from "./style";
import { Link } from "react-router-dom";
import LogoPng from "../../assets/logoBePragmatic.png";

export const Header = () => {
  return (
    <HeaderContent>
      <Link to="/">
        <Logo src={LogoPng} alt="Be Pragmatic Logo" />
      </Link>
      <Links>
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
    </HeaderContent>
  );
};
