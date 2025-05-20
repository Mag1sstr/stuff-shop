import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from "../../images/logo.svg";

interface IProps {
  width?: number;
}

function Logo({ width }: IProps) {
  return (
    <Link to={ROUTES.HOME}>
      <img style={{ width }} src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
