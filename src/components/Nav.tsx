import "../assets/nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <a href="/" className="nav-button">
        Home
      </a>
      <a href="/savedcandidates" className="nav-button">
        Candidates
      </a>
    </nav>
  );
};

export default Nav;
