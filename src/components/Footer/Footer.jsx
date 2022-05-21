import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-md-9 col-lg-8">
            <nav id="footer-nav" aria-label="Page Footer">
              <Link to="/home/jobs">
                <img
                  src="https://www.toronto.ca/wp-content/themes/cot/img/icon-group.svg"
                  alt=""
                />
                Jobs at the City
              </Link>
              <Link to="/home/media-room">
                <img
                  src="https://www.toronto.ca/wp-content/themes/cot/img/icon-chat.svg"
                  alt=""
                />
                Media Room
              </Link>
              <Link to="/home/contact-us">
                <img
                  src="https://www.toronto.ca/wp-content/themes/cot/img/icon-mobile.svg"
                  alt=""
                />
                Contact Us
              </Link>
              <Link to="/home/media-room">
                <img
                  src="https://www.toronto.ca/wp-content/themes/cot/img/icon-311.svg"
                  alt="3-1-1 Toronto"
                />
              </Link>
              <Link to="/home/311-toronto-at-your-service">
                <img
                  src="https://www.toronto.ca/wp-content/themes/cot/img/icon-flag.svg"
                  alt=""
                />
                Translate
              </Link>
            </nav>
          </div>
          <div className="col-sm-4 col-md-3 col-lg-4">
            <nav id="social-nav">
              <div id="f-connect" className="col-lg-4 col-md-6">
                <span>Connect:</span>
              </div>
              <div id="f-icons-1" className="col-lg-4 col-md-6">
                <a href="https://twitter.com/cityoftoronto">
                  <img
                    src="https://www.toronto.ca/wp-content/themes/cot/img/icon-twitter.svg"
                    alt=""
                  />
                </a>
                <a href="https://www.facebook.com/cityofto/">
                  <img
                    src="https://www.toronto.ca/wp-content/themes/cot/img/icon-facebook.svg"
                    alt=""
                  />
                </a>
                <a href="https://www.instagram.com/cityofto/">
                  <img
                    src="https://www.toronto.ca/wp-content/themes/cot/img/icon-instagram.svg"
                    alt=""
                  />
                </a>
              </div>
              <div
                id="f-icons-1"
                className="col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-6"
              >
                <a href="https://www.youtube.com/user/thecityoftoronto">
                  <img
                    src="https://www.toronto.ca/wp-content/themes/cot/img/icon-youtube.svg"
                    alt=""
                  />
                </a>
                <a href="https://www.linkedin.com/company/city-of-toronto/">
                  <img
                    src="https://www.toronto.ca/wp-content/themes/cot/img/icon-linkedin.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="https://www.toronto.ca/wp-content/themes/cot/img/icon-blank.svg"
                    alt=""
                  />
                  <div id="view-all-icon-text">VIEW ALL</div>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <hr />
        <p>
          <a href="https://www.toronto.ca/home/copyright-information/">
            © City of Toronto 1998 - 2022
          </a>
          <span class="separator">|</span>
          <a href="#">Privacy</a>
          <span class="separator">|</span>
          <a href="https://www.toronto.ca/city-government/accessibility-human-rights/accessibility-at-the-city-of-toronto/">
            Accessibility at the City of Toronto
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
