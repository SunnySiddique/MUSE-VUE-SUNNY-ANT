import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="creative-content">
        <div className="copy-right">
          <p>
            © 2021, made with ❤️ by <span>Creative Tim </span> for a better web.
          </p>
        </div>
        <div className="footer-list">
          <ul>
            <li>
              <a href="#">Creative Tim</a>
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">BlogLicense</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
