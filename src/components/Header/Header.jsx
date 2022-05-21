import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  console.log(location);

  return (
    <header
      id="header"
      role="banner"
      style={{ position: location.pathname === "/" && "absolute" }}
    >
      <div className="container-fluid">
        <div id="header-left">
          <div id="logo">
            <h1>
              <a href="/">
                <img
                  src="https://www.sourcefromontario.com/sites/default/files/styles/col_4/public/event-logos/Toronto_0.png?itok=fNDutBgB"
                  height={70}
                  width={225}
                  alt="City of Toronto"
                />
              </a>
            </h1>
          </div>
        </div>
        <div id="header-right">
          <div id="top-bar">
            <form action="">
              <div role="search" id="search">
                <label className="sr-only" htmlFor="query">
                  {/* Search */}
                </label>
                <input
                  id="query"
                  name="query"
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
                <button
                  id="query-search"
                  className="btn btn-default"
                  type="submit"
                >
                  <img
                    src="https://www.toronto.ca/wp-content/themes/cot/img/icon-search.svg"
                    alt="Search"
                  />
                </button>
              </div>
            </form>
            <button id="text-increase" className="btn btn-default">
              <i id="i-text-increase" aria-hidden="true">
                A+
              </i>
            </button>
            <button id="text-decrease" className="btn btn-default">
              <i id="i-text-decrease" aria-hidden="true">
                A-
              </i>
            </button>
            <button
              id="want-to"
              className="btn btn-warning"
              data-toggle="modal"
            >
              I want to...
            </button>
          </div>
          <div id="main-nav-container">
            <nav id="main-nav" aria-label="City of Toronto Main Menu">
              <ul>
                <li className="menu-list-item">
                  <Link to="/services-payments">
                    <span>Services & Payments</span>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to="/community-people">
                    <span>Community & People</span>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to="/business-economy">
                    <span>Business & Economy</span>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to="/explore-enjoy">
                    <span>Explore & Enjoy</span>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to="/city-government">
                    <span>City Government</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
