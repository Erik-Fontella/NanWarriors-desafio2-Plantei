import "./Footer.css";
import ImgLogo from "@Assets/footer/LogoFooter.svg";
import ImgBgFooter from "@Assets/footer/footerBackground.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-background" src={ImgBgFooter} alt="" />
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-info">
            <h4>Stay Fresh</h4>
            <p>compassinhos@gmail.com</p>
            <p>+55 41 99999-9999</p>
          </div>
          <div className="footer-container-links">
            <div className="footer-links">
              <p>Links</p>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <p>Community</p>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copryght">
          <div className="footer-row">
            <img src={ImgLogo} alt="Logo plant peace" />
            <div>
            <p> Compassinhos ©. All rights</p>
            <p>reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
