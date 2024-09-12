import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="ul-header">
        <Link to="/"><li>Home</li></Link>
        <Link to="/register"><li>Register</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/about-us"><li>About us</li></Link>
      </ul>
    </nav>
  );
};

export default NavBar;
