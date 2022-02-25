import { HeaderContent, Logo, HeaderUl } from "./style";
import { Link } from "react-router-dom";
import LogoPng from "../../assets/logoBePragmatic.png";

export const Header = () => {
  return (
    <HeaderContent>
      <Link to="/">
        <Logo src={LogoPng} alt="Be Pragmatic Logo" />
      </Link>
      <HeaderUl>
        <li>
          <Link to="./" className="Link-Li">
            Home
          </Link>
        </li>
        <li>
          <Link to="./social" className="Link-Li">
            Social
          </Link>
        </li>
        <li>
          <Link to="./projects" className="Link-Li">
            Projects
          </Link>
        </li>
        <li>
          <Link to="./blog" className="Link-Li">
            Blog
          </Link>
        </li>
      </HeaderUl>
    </HeaderContent>
  );
};
