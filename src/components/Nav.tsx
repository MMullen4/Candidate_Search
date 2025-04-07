import "../assets/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-button">
        Home
      </Link>
      <Link to="/savedcandidates" className="nav-button">
        Candidates
      </Link>
    </nav>
  );
};

export default Nav;
