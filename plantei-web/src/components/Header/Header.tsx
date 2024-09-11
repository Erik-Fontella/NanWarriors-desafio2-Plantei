import "./Header.css";
import NavBar from "@Components/Header/components/NavBar/NavBar";
import LoginButton from "@Components/Header/components/LoginButton/LoginButton";
import ImgLogo from "@Assets/header/header-logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <img src={ImgLogo} alt="Logo do WebSite" />
        </div>
        <NavBar />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
