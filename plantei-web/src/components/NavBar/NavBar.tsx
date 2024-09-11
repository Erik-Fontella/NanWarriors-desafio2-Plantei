
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
