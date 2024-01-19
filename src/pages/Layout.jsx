import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Outlet, Link } from "react-router-dom";
import { useState, useRef } from "react";

const Layout = () => {
  const year = new Date().getFullYear();
  const nodeRef = useRef(null);
  const [appClassName, setAppClassName] = useState("app-container");

  const handleDarkMode = (e) => {
    e.preventDefault();

    if (appClassName === "app-container") {
      setAppClassName("app-container dark-mode");
    } else {
      setAppClassName("app-container");
    }
  }

  return (
    <div className={appClassName}>

      <header>

        <div className="nav-title">
          <img src="/js-logo.png" alt="" />
          <h3>Harry Curtis: JavaScript Portfolio</h3>
        </div>

        <div className="button-group">
          <div className="dark-mode-div">
            <button className="nav-button material-symbols-outlined" onClick={handleDarkMode}>nightlight</button>
          </div>
          <DropDown />
        </div>

      </header>

      <TransitionGroup>
        <CSSTransition nodeRef={nodeRef} classNames="fade" timeout={300}>
          <div className="outlet-container">
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>

      <footer>

        &copy; {year} Harry Stuart Curtis.

      </footer>

    </div>
  )
};

const DropDown = () => {
  const [dropdownStyles, setDropdownStyles] = useState({ display: "none" });

  const handleMenu = (e) => {
    if (dropdownStyles.display === "none") {
      setDropdownStyles({ display: "flex" })
    } else {
      setDropdownStyles({ display: "none" })
    }
  }

  return (
    <div className="dropdown">
      <button onClick={handleMenu} className="nav-button material-symbols-outlined">
        menu
      </button>
      <nav className="dropdown-menu" style={dropdownStyles}>
        <Link to="/" onClick={handleMenu}>Read Me</Link>
        <Link to="/caesar-cipher" onClick={handleMenu}>Caesar Cipher</Link>
        <Link to="/cash-register" onClick={handleMenu}>Cash Register</Link>
        <Link to="/palindrome-checker" onClick={handleMenu}>Palindrome Checker</Link>
        <Link to="/roman-numeral-converter" onClick={handleMenu}>Roman Numeral Converter</Link>
        <Link to="/telephone-number-validator" onClick={handleMenu}>Telephone Number Validator</Link>
      </nav>
    </div>
  );
}

export default Layout;