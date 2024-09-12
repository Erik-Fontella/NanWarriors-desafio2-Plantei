import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="ul-header">
        <Link to="/"><li className="li-header">Home</li></Link>
        <Link to="/register"><li className="li-header">Register</li></Link>
        <Link to="/products"><li className="li-header">Products</li></Link>
        <Link to="/about-us"><li className="li-header">About us</li></Link>
      </ul>
    </nav>
  );
};

export default NavBar;
